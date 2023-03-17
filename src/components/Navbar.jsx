import { Avatar } from '@chakra-ui/react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = (props) => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='py-[15px]'>
      <div className='flex flex-col items-center justify-center'>
        <Avatar size='2xl' bg='gray.500' name={currentUser.displayName}/>
        <div className='mt-[15px]'>
          <span className='font-semibold text-text text-[24px]'>{currentUser.displayName}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar