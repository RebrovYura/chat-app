import React, { useEffect, useContext, useState } from 'react'
import { Avatar } from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContext'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../data/firebase'
import { ChatContext } from '../context/ChatContext'
import ChatListItem from './ChatListItem'

const ChatsList = ({handleClick}) => {
  const [chats, setChats] = useState([])
  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data())
      })
      return () => {
        unsub()
      }
    }
    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleSelect = (user) => {
    dispatch({ type: 'CHANGE_USER', payload: user })
  }

  return (
    <div className='flex flex-col'>
      <div className='text-center py-[20px]'>
        <span className='uppercase text-text font-semibold text-[16px]'>
          — Your chats —
        </span>
      </div>
      <div className='max-h-[70vh] overflow-auto overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-input scrollbar-track-rounded-[5px] scrollbar-thumb-text scrollbar-thumb-rounded-[5px]'>
        {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
          <ChatListItem key={chat[0]} handleSelect={() => handleSelect(chat[1].userInfo)} handleClick={handleClick} name={chat[1].userInfo.displayName} lastMessage={chat[1].lastMessage?.text}/>
        ))}
      </div>
    </div>
  )
}

export default ChatsList