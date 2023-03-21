import React from 'react'
import { Avatar, Button } from '@chakra-ui/react'
import { BiExit } from 'react-icons/bi'
import {IoMdSettings} from 'react-icons/io'
import avatar from '../assets/images/scale.jpg'

const UserBar = () => {
  return (
    <div className='flex justify-between bg-input px-[25px] py-[10px]'>
      <div className='flex items-center text-[#FFFFFF] pr-[20px]'>
        <Avatar src={avatar}/>
        <span className='font-semibold text-[14px] ml-[10px]'>Yuri Rebrov</span>
      </div>
      <div className='flex items-center'>
        <a className='mr-[22px] cursor-pointer'><IoMdSettings size='25px' className='text-text'/></a>
        <a className='cursor-pointer'><BiExit size='25px' color='#EF476F'/></a>
      </div>
    </div>
  )
}

export default UserBar