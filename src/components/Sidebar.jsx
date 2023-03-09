import Navbar from './Navbar'
import SearchBar from './SearchBar'
import ChatList from './ChatsList'

import { Button, Divider } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <div className=''>
        <Navbar />
        <SearchBar />
        <ChatList />
      </div>
      <div>
        <div className='py-[15px]'>
          <Divider />
        </div>
        <div className='flex justify-center py-[10px]'>
          <Button variant='outline' className='font-bold'>Logout</Button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar