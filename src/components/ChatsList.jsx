import { useState, useEffect, useContext } from 'react'
import { Avatar } from "@chakra-ui/react"
import { AuthContext } from '../context/AuthContext'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../data/firebase'

const ChatsList = () => {
  const { currentUser } = useContext(AuthContext)
  const [chats, setChats] = useState([])

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

  return (
    <div>
      {/* <div className='flex text-text items-center hover:bg-secondary transition-all p-[10px] rounded-[5px]'>
        <Avatar size='md' />
        <div className='flex flex-col ml-[15px]'>
          {/* {console.log(chat[1].userInfo.displayName)} 
          <span>Sheggy</span>
          <span>Hello there</span>
        </div>
      </div>
      <div className='flex text-text items-center hover:bg-secondary transition-all p-[10px] rounded-[5px]'>
        <Avatar size='md' />
        <div className='flex flex-col ml-[15px]'>
          {/* {console.log(chat[1].userInfo.displayName)} 
          <span>Sheggy</span>
          <span>Hello there</span>
        </div>
      </div> */}

      {Object.entries(chats)?.map((chat) => (
        <div key={chat[0]} className='flex text-text items-center hover:bg-secondary transition-all p-[10px] rounded-[5px]'>
          <Avatar size='md' name={chat[1].userInfo.displayName}/>
          <div className='flex flex-col ml-[15px]'>
            {console.log(chat[1].userInfo.displayName)}
            <span>{chat[1].userInfo.displayName}</span>
            <span>lalala</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatsList