import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import {BiMenuAltLeft} from 'react-icons/bi'

const Home = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='min-h-[100vh] font-poppins bg-primary'>
      <div className='flex'>
        <div className={`md:hidden ${toggle ? 'hidden' : 'block'} m-[5px] p-[10px] bg-[#FFFFFF] shadow-buttonShadow rounded-[5px] md:hidden`} onClick={() => setToggle(prev => !prev)}>
          {console.log(toggle)}
          <BiMenuAltLeft size='20px'/>
        </div>
        <div className={`md:block ${toggle ? 'block' : 'hidden'}`}>
          <Sidebar />
        </div>
        <Chat />
      </div>
    </div>
  )
}

export default Home