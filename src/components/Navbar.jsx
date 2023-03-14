import { Avatar, Button, chakra } from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { theme } from '../theme/Theme';

const Navbar = (props) => {
  return (
    <div className='py-[15px]'>
      <div className='flex items-center'>
        <Avatar size='lg' bg='red.500'/>
        <div className='flex flex-col ml-[15px]'>
          <span className='font-semibold'>{props.name}</span>
          <span className='font-extralight'>{props.email}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar