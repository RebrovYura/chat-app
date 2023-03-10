import Navbar from './Navbar'
import SearchBar from './SearchBar'
import ChatList from './ChatsList'
import { signOut } from 'firebase/auth'
import { auth } from '../data/firebase'

import { Button, Divider } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate()
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
          <Button variant='outline' className='font-bold' onClick={() => {
            signOut(auth)
            navigate('/login')
            }}>Logout</Button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar