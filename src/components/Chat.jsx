import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { Avatar } from '@chakra-ui/react'
import MessageInput from './MessageInput'

const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className='text-text flex flex-col items-center justify-between h-full'>
      <div className='py-[10px]'>
        <p className='font-bold text-[20px] text-active'>{data.user.displayName || 'Select user'}</p>
      </div>
      <div className='h-full w-full'>
        messages        
      </div>
      <div className=''>
        <MessageInput/>
      </div>
    </div>
  )
}

export default Chat