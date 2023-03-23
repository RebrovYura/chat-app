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