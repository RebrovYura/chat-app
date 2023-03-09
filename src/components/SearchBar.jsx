import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = () => {
  return (
    <div className='py-[25px] px-[20px]'>
      <span className='font-bold text-[24px]'>Chats</span>
      <InputGroup className='mt-[10px]'>
        <InputLeftElement children={<SearchIcon color='gray' />} />
        <Input variant='filled' placeholder='Username...' focusBorderColor='gray' />
      </InputGroup>
    </div>
  )
}

export default SearchBar