import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { Avatar } from '@chakra-ui/react'
import MessageInput from './MessageInput'

const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className='text-text flex flex-col items-center py-[30px] justify-between min-h-[90vh]'>
      <div>
        messages        
      </div>
      <div className='w-[60%]'>
        <MessageInput/>
      </div>
    </div>
  )
}

export default Chat