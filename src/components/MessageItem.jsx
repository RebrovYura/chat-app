import React from 'react'
import { Avatar } from '@chakra-ui/react'
import avatar from '../assets/images/scale.jpg'

const MessageItem = () => {
    return (
        <>
            <div className='flex gap-x-[15px] items-stretch my-[20px] '>
                <Avatar src={avatar} />
                <div className='flex items-center md:max-w-[400px] max-w-[200px] bg-[#FFF] px-[10px] py-[5px] rounded-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
            <div className='flex flex-row-reverse gap-x-[15px] items-stretch my-[20px]'>
                <Avatar src={avatar} />
                <div className='flex items-center md:max-w-[300px] max-w-[200px] bg-text text-[#FFF] px-[10px] py-[5px] rounded-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
            </div>
        </>
    )
}

export default MessageItem