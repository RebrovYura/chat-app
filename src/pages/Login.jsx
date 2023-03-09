import { auth } from '../data/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value
        const password = e.target[1].value

        signInWithEmailAndPassword(auth, email, password)
        navigate('/')
    }

    return (
        <div className='form font-poppins bg-primary min-h-[100vh] flex justify-center items-center'>
            <div className='formWrapper bg-secondary px-[40px] py-[30px] rounded-[10px]'>
                <span className='uppercase text-text font-semibold text-center block mb-[20px] text-[22px]'>Sign in</span>
                <form onSubmit={handleSubmit} className='flex flex-col gap-[25px]'>
                    <input type="email" placeholder='Email' className='px-[10px] py-[8px] rounded-[8px] outline-none focus:bg-text transition' />
                    <input type="password" placeholder='Password' className='px-[10px] py-[8px] rounded-[8px] outline-none focus:bg-text transition' />
                    <button className='uppercase bg-accent rounded-[30px] text-text text-[16px] font-bold py-[10px]'>Sign in</button>
                </form>
                <div className='w-full h-[1px] bg-[#404557] mt-[25px] mb-[15px]'></div>
                <p className='text-text font-regular text-center'>Don't have an account? <span className='text-accent font-bold'>Sign up</span></p>
            </div>
        </div>
    )
}

export default Login