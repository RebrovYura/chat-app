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
        displayName: displayName,
      })
      await setDoc(doc(db, "users", (await res).user.uid), {
        uid: (await res).user.uid,
        displayName,
        email: email,
      })
      await setDoc(doc(db, "userChats", (await res).user.uid), {})
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <div className='form font-poppins bg-primary min-h-[100vh] flex justify-center items-center'>
      <div className='formWrapper bg-white px-[40px] py-[30px] rounded-[10px] max-w-[350px]'>
        <span className='uppercase text-text font-semibold text-center block mb-[20px] text-[22px]'>Sign up</span>
        <form onSubmit={handleSubmit} className='flex flex-col gap-[25px] text-text'>
          <input type="text" placeholder='Username' className='px-[10px] py-[8px] rounded-[8px] outline-none bg-primary focus:bg-primary transition' />
          <input type="email" placeholder='Email' className='px-[10px] py-[8px] rounded-[8px] outline-none bg-primary focus:bg-primary transition' />
          <input type="password" placeholder='Password' className='px-[10px] py-[8px] rounded-[8px] outline-none bg-primary focus:bg-primary transition' />
          <button className='uppercase bg-button rounded-[30px] text-white text-[16px] font-bold py-[10px]'>Sign up</button>
        </form>
        {
          error && <span className="text-accent">Something went wrong</span>
        }
        <div className='w-full h-[1px] bg-primary mt-[25px] mb-[15px]'></div>
        <span className='text-text font-regular text-center block md:inline'>Already have an account? </span>
        <Link to='/login' className='text-active font-bold hover:underline block md:inline text-center'>Sign in</Link>
      </div>
    </div>
  )
}

export default Register