import imgAdd from '../assets/icons/imageAdd.svg'

const Register = () => {
  return (
    <div className='form font-poppins bg-primary min-h-[100vh] flex justify-center items-center'>
      <div className='formWrapper bg-secondary px-[40px] py-[50px] rounded-[10px]'>
        <span className='uppercase text-text font-semibold text-center block mb-[20px] text-[22px]'>Sign up</span>
        <form action="" className='flex flex-col gap-[25px]'>
          <input type="text" placeholder='Username' className='px-[10px] py-[8px] rounded-[8px] outline-none focus:bg-text transition'/>
          <input type="email" placeholder='Email' className='px-[10px] py-[8px] rounded-[8px] outline-none focus:bg-text transition'/>
          <input type="password" placeholder='Password' className='px-[10px] py-[8px] rounded-[8px] outline-none focus:bg-text transition'/>
          <input type="file" id="file" className='hidden'/>
          <label htmlFor="file" className='text-text cursor-pointer flex items-center gap-x-[10px] cursor-pointer'>
            <img src={imgAdd} alt="add image" />
            <span>Add avatar</span>
            </label>
          <button className='uppercase bg-accent rounded-[30px] text-text text-[16px] font-bold py-[10px]'>Sign up</button>
        </form>
        <div className='w-full h-[1px] bg-[#404557] mt-[25px] mb-[15px]'></div>
        <p className='text-text font-regular text-center'>Already have an account? <span className='text-accent font-bold'>Sign in</span></p>
      </div>
    </div>
  )
}

export default Register