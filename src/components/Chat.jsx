// import { useContext } from 'react'
// import { ChatContext } from '../context/ChatContext'
// import { Avatar } from '@chakra-ui/react'
// import MessageInput from './MessageInput'
// import Messages from './Messages'

// const Chat = () => {
//   const { data } = useContext(ChatContext)

//   return (
//     <div className='text-text flex flex-col items-center justify-between h-full'>
//       <div className='py-[10px]'>
//         <p className='font-bold text-[20px] text-active'>{data.user.displayName || 'Select user'}</p>
//       </div>
//       <div className='h-full w-full overflow-scroll'>
//         <Messages />
//       </div>
//       <div className='mb-[15px]'>
//         <MessageInput />
//       </div>
//     </div>
//   )
// }

// export default Chat

import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import MessageInput from './MessageInput'

const Chat = ({handleClick}) => {
  return (
    <div className='grow-[3] min-h-[100vh] flex flex-col justify-between'>
      <div className='h-full'>
        <ChatHeader handleClick={handleClick} />
        <div>
          <Messages />
        </div>
      </div>
      <MessageInput />
    </div>
  )
}

export default Chat