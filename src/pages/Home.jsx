import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div className='min-h-[100vh] font-poppins'>
      <div className='flex'>
        <div className='flex-[1] flex-col px-[15px]'>
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