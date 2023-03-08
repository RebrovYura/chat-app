import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='min-h-[100vh] bg-primary font-poppins'>
      <div className='flex text-text'>
        <div className='flex-[1]'>
          <Sidebar />
        </div>
        <div className='flex-[3]'>
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Home