import React from 'react'
import { Avatar } from '@chakra-ui/react'

const ChatListItem = () => {
    return (
        <div className='flex items-center my-[20px] ml-[15px] cursor-pointer hover:scale-[1.03] transition'>
            <Avatar name='John Shimmer' />
            <div className='ml-[10px] text-[white] '>
                <p className='text-[14px] font-semibold'>John Shimmer</p>
                <span className='text-[14px] font-normal'>Hello, man</span>
            </div>
        </div>
    )
}

export default ChatListItem