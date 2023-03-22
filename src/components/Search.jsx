import React from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<Search2Icon color='#675C7C' />} />
      <Input placeholder="Let's find some friends!" bg='#352C46' _placeholder={{ color: '#675C7C' }} textColor='#FFFFFF' borderColor='none' border='none' />
    </InputGroup>
  )
}

export default Search