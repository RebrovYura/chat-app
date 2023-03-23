import React, { useContext, useEffect, useState } from 'react'
import { onSnapshot, doc } from 'firebase/firestore'
import { ChatContext } from '../context/ChatContext'
import { db } from '../data/firebase'
import MessageItem from './MessageItem'

const Messages = () => {
    const [messages, setMessages] = useState([])
    const { data } = useContext(ChatContext)

    useEffect(() => {
      const unsub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages)
      })
      return () => {
        unsub()
      }
    }, [data.chatId])

  return (
    <div className='md:px-[50px] mx-auto px-[20px] max-h-[80vh] lg:w-[60vw] overflow-y-auto overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-[#fff] scrollbar-track-rounded-[5px] scrollbar-thumb-text scrollbar-thumb-rounded-[5px]'>
      {messages.map(message => (
        <MessageItem message={message} key={message.id}/>
      ))}
    </div>
  )
}

export default Messages