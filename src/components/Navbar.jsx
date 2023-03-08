import { Avatar, Button, chakra } from '@chakra-ui/react'
import avatar from '../assets/images/userImage.jpeg'
import { SmallCloseIcon } from '@chakra-ui/icons'
import Theme from '../theme/Theme';

const Navbar = () => {
  return (
    <div className='py-[15px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Avatar size='lg' src={avatar} />
          <div className='flex flex-col ml-[15px]'>
            <span className='font-semibold'>Yuri Rebrov</span>
            <span className='font-extralight'>Online</span>
          </div>
        </div>
        <Button variant='outline' height='40px' width='40px'><SmallCloseIcon/></Button>
      </div>
    </div>
  )
}

export default Navbar