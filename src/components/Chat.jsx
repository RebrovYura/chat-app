import React from 'react'
import { Avatar } from '@chakra-ui/react'

const Chat = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <Avatar name='' size='md'/>
      </div>
      <div className='h-full'>
        main
      </div>
      <div>
        footer
      </div>
    </div>
  )
}

export default Chat