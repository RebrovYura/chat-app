import React, { useContext, useEffect, useRef } from 'react'
import { Avatar } from '@chakra-ui/react'
import avatar from '../assets/images/scale.jpg'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const MessageItem = ({ message }) => {
    const { currentUser } = useContext(AuthContext)
    const { data } = useContext(ChatContext)
    const ref = useRef()

    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }, [message]) 

    return (
        <>
            <div ref={ref} className={`${message.senderId == currentUser.uid ? 'flex-row-reverse' : 'flex-row'} flex gap-x-[15px] items-stretch my-[20px] text-[14px] md:text-[16px]`}>
                <Avatar name={`${message.senderId == currentUser.uid ? currentUser.displayName : data.user.displayName}`} />
                <div className={`${message.senderId == currentUser.uid ? 'bg-text text-white' : 'bg-white text-black'} flex items-center md:max-w-[400px] max-w-[200px] px-[10px] py-[5px] rounded-[10px] break-all`}>{message.text}</div>
            </div>
        </>
    )
}

export default MessageItem