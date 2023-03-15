import { Button, Icon } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Home = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className='min-h-[100vh] font-poppins bg-primary'>
      <div className='flex items-center pt-[10px] px-[10px]'>
        <Sidebar />
        <div className='text-text w-full flex justify-center'>
          <span className='text-[24px] font-bold text-active'>{data.user.displayName || 'Select friend'}</span>
        </div>
        <div className='rounded-[10px] shadow-buttonShadow'>
          <Button bg='transparent' className='text-text' width='50px' height='50px' _hover={{ background: 'transparent' }}><Icon as={BsThreeDotsVertical} boxSize={6} /></Button>
        </div>
      </div>
      <Chat />
      {/*  */}

    </div>
  )
}

export default Home