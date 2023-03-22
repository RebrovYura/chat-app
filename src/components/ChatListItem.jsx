import React from 'react'
import { Avatar } from '@chakra-ui/react'

const ChatListItem = ({handleSelect, name, lastMessage}) => {
    return (
        <div className='flex items-center my-[20px] ml-[15px] cursor-pointer hover:scale-[1.03] transition' onClick={handleSelect}>
            <Avatar name={name} />
            <div className='ml-[10px] text-[white] '>
                <p className='text-[14px] font-semibold'>{name}</p>
                <span className='text-[14px] font-normal'>{lastMessage}</span>
            </div>
        </div>
    )
}

export default ChatListItem