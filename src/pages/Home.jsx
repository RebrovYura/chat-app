import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className='min-h-[100vh] font-poppins bg-primary'>
      <div className='flex relative'>
        <div className={`${isOpen ? 'absolute z-[1] min-h-[100vh] min-w-[100vw] bg-black opacity-60' : 'hidden'} `} onClick={handleClick} />
        <div className={`${isOpen ? 'absolute z-[2]' : 'hidden'} md:block`} >
          <Sidebar />
        </div>
        <Chat handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Home