import { onSnapshot, doc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../data/firebase'
import Message from './Message'

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
    <div className='text-text block'>
      {messages.map((message) => (
        <div className='flex flex-col font-normal text-[18px]'>
          <div className='py-[10px]' key={message.id}>
            {message.text}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Messages