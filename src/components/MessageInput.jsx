import React from 'react'
import { InputGroup, Input, Button, Textarea  } from '@chakra-ui/react'

const MessageInput = () => {
  return (
    <div className=''>
      <InputGroup>
          <Textarea placeholder='Enter your message...' background='#313338' borderColor='#313338' resize='none'></Textarea>
          {/* <Button background='red'>Send</Button> */}
        </InputGroup>
    </div>
  )
}

export default MessageInput