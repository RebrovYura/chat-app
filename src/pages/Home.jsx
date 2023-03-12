import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import SearchBar from '../components/SearchBar'

import { auth } from '../data/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const Home = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // console.log(user)
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

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