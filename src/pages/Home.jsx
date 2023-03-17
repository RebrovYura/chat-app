import { Button, Icon } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Home = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className='min-h-[100vh] font-poppins bg-primary flex justify-between text-text'>
      <div className='w-full lg:max-w-[400px] lg:shadow-buttonShadow'>
        <Sidebar />
      </div>
      <div className='w-full'>
        <Chat />
      </div>
      <div className='w-full max-w-[400px] text-right '>
        <Button bg='transparent' className='text-text shadow-buttonShadow' width='50px' height='50px' _hover={{ background: 'transparent' }}><Icon as={BsThreeDotsVertical} boxSize={6} /></Button>
      </div>
    </div>
  )
}

export default Home