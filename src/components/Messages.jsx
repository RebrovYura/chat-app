// import { onSnapshot, doc } from 'firebase/firestore'
// import React, { useContext, useEffect, useState } from 'react'
// import { ChatContext } from '../context/ChatContext'
// import { db } from '../data/firebase'
// import Message from './Message'

// const Messages = () => {
//   const [messages, setMessages] = useState([])
//   const { data } = useContext(ChatContext)

//   useEffect(() => {
//     const unsub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
//       doc.exists() && setMessages(doc.data().messages)
//     })


//     return () => {
//       unsub()
//     }
//   }, [data.chatId])


//   return (
//     <div className='text-text block'>
//       {messages.map((message) => (
//         <Message message={message} key={message.id}/>
//       ))}
//     </div>
//   )
// }

// export default Messages

import React from 'react'
import MessageItem from './MessageItem'

const Messages = () => {
  return (
    <div className='md:px-[50px] max-h-[80vh] lg:w-[60vw] overflow-y-auto scrollbar scrollbar-thin scrollbar-track-[#fff] scrollbar-track-rounded-[5px] scrollbar-thumb-[#eee] scrollbar-thumb-rounded-[5px]'>
        <MessageItem/>
    </div>
  )
}

export default Messages