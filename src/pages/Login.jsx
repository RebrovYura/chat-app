import { auth } from '../data/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value
        const password = e.target[1].value

        try {
            signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='form font-poppins bg-primary min-h-[100vh] flex justify-center items-center'>
            <div className='formWrapper bg-secondary px-[40px] py-[30px] rounded-[10px] max-w-[335px]'>
                <span className='uppercase text-text font-semibold text-center block mb-[20px] text-[22px]'>Sign in</span>
                <form onSubmit={handleSubmit} className='flex flex-col gap-[25px]'>
                    <input type="email" placeholder='Email' className='px-[10px] py-[8px] rounded-[8px] outline-none bg-primary text-text focus:bg-[#25262A] transition' />
                    <input type="password" placeholder='Password' className='px-[10px] py-[8px] rounded-[8px] outline-none bg-primary text-text focus:bg-[#25262A] transition' />
                    <button className='uppercase bg-active rounded-[30px] text-text text-[16px] font-bold py-[10px]'>Sign in</button>
                    <span className='cursor-pointer text-text text-[14px] hover:underline text-center'>Forgot your password?</span>
                </form>
                <div className='w-full h-[1px] bg-primary mt-[25px] mb-[15px]'></div>
                <span className='text-text font-regular text-center block md:inline'>Don't have an account? </span>
                <Link to='/register' className='text-active font-bold hover:underline block md:inline text-center'>Sign up</Link>
            </div>
        </div>
    )
}

export default Login