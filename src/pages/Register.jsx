import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

import { auth, db } from "../data/firebase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'

const Register = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = createUserWithEmailAndPassword(auth, email, password)
      updateProfile((await res).user, {
        displayName: displayName
      })
      await setDoc(doc(db, "users", (await res).user.uid), {
        uid: (await res).user.uid,
        displayName,
        email: email
      })
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <div className='form font-poppins bg-primary min-h-[100vh] flex justify-center items-center'>
      <div className='formWrapper bg-secondary px-[40px] py-[30px] rounded-[10px]'>
        <span className='uppercase text-text font-semibold text-center block mb-[20px] text-[22px]'>Sign up</span>
        <form onSubmit={handleSubmit} className='flex flex-col gap-[25px]'>
          <input type="text" placeholder='Username' className='px-[10px] py-[8px] rounded-[8px] outline-none focus:bg-text transition' />
          <input type="email" placeholder='Email' className='px-[10px] py-[8px] rounded-[8px] outline-none focus:bg-text transition' />
          <input type="password" placeholder='Password' className='px-[10px] py-[8px] rounded-[8px] outline-none focus:bg-text transition' />
          {/* <input type="file" name="" id="" open/> */}
          <button className='uppercase bg-accent rounded-[30px] text-text text-[16px] font-bold py-[10px]'>Sign up</button>
        </form>
        {
          error && <span className="text-[red]">Something went wrong</span>
        }
        <div className='w-full h-[1px] bg-[#404557] mt-[25px] mb-[15px]'></div>
        <p className='text-text font-regular text-center'>Already have an account? <Link to='/login' className='text-accent font-bold'>Sign in</Link></p>
      </div>
    </div>
  )
}

export default Register