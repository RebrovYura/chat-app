// import { useState, useEffect, useContext } from 'react'
// import { Avatar } from "@chakra-ui/react"
// import { AuthContext } from '../context/AuthContext'
// import { onSnapshot, doc } from 'firebase/firestore'
// import { db } from '../data/firebase'
// import { ChatContext } from '../context/ChatContext'
// import { data } from 'autoprefixer'

// const ChatsList = () => {
//   const [chats, setChats] = useState([])
//   const { currentUser } = useContext(AuthContext)
//   const { dispatch } = useContext(ChatContext)

//   useEffect(() => {
//     const getChats = () => {
//       const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
//         setChats(doc.data())
//       })
//       return () => {
//         unsub()
//       }
//     }
//     currentUser.uid && getChats()
//   }, [currentUser.uid])

//   const handleSelect = (user) => {
//     dispatch({type: 'CHANGE_USER', payload: user})
//   }

//   return (
//     <div>
//       {dispatch.user && Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
//         <div key={chat[0]} className='flex text-text items-center hover:bg-secondary transition-all p-[10px] rounded-[5px] cursor-pointer' onClick={() => handleSelect(chat[1].userInfo)}>
//           <Avatar size='md' name={chat[1].userInfo.displayName}/>
//           <div className='flex flex-col ml-[15px]'>
//             {console.log(chat[1].userInfo.displayName)}
//             <span>{chat[1].userInfo.displayName}</span>
//             <span>{chat[1].lastMessage?.text}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ChatsList

import React from 'react'
import ChatListItem from './ChatListItem'

const ChatsList = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-center py-[20px]'>
        <span className='uppercase text-text font-semibold text-[16px]'>
          — Your chats —
        </span>
      </div>
      <div className='max-h-[70vh] overflow-auto overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-input scrollbar-track-rounded-[5px] scrollbar-thumb-text scrollbar-thumb-rounded-[5px]'>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </div>
    </div>
  )
}

export default ChatsList