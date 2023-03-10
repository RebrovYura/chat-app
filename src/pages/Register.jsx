import { auth, storage, db } from "../data/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore'

import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import user from '../assets/images/user.png';

const Register = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      const metadata = {
        contentType: 'image/jpeg'
      };

      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, 'images/' + displayName)
      const uploadTask = uploadBytesResumable(storageRef, file, metadata)

      uploadTask.on(
        (error) => {
          setError(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            })
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            })
          });
        }
      );
      // await setDoc(doc(db, "userChats", res.user.uid), {})
    } catch (error) {
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
          <input type="file" name="" id="" />
          <button className='uppercase bg-accent rounded-[30px] text-text text-[16px] font-bold py-[10px]'>Sign up</button>
        </form>
        {
          error && <span className="text-[red]">Something went wrong</span>
        }
        <div className='w-full h-[1px] bg-[#404557] mt-[25px] mb-[15px]'></div>
        <p className='text-text font-regular text-center'>Already have an account? <span className='text-accent font-bold'>Sign in</span></p>
      </div>
    </div>
  )
}

export default Register