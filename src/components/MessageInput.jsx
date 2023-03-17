import React from 'react'
import { InputGroup, Input, Button, Textarea } from '@chakra-ui/react'

const MessageInput = () => {
  return (
    <div className='max-w-[600px] min-w-[300px] md:min-w-[500px]'>
      <InputGroup className='flex items-center'>
        <Textarea placeholder='Enter your message...' background='#313338' borderColor='#313338' resize='none' />
        <div className='sm:flex sm:flex-col ml-[10px]'>
          <Button bg='#06D6A0' _hover={{background: '#06D6A0'}}>Send</Button>
          {/* <Button bg='#06D6A0'>file</Button> */}
        </div>
      </InputGroup>
    </div>
  )
}

export default MessageInput