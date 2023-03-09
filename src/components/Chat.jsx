import React from 'react'
import { Avatar } from '@chakra-ui/react'
import { Input, InputGroup, Button } from '@chakra-ui/react'

const Chat = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='py-[15px] bg-text text-center'>
        <span>Username Surname</span>
      </div>
      <div className='h-full'>
        main
      </div>
      <div className='flex justify-center pb-[50px] pt-[20px]'>
        <div className='w-[70%]'>
          <InputGroup>
            <Input placeholder='Enter your message...'/>
            <Button width='100px' marginLeft='10px'>Send</Button>
          </InputGroup>
        </div>
      </div>
    </div>
  )
}

export default Chat