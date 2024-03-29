import { useContext, useState } from 'react'
import { Input, InputGroup, InputLeftElement, Avatar, Button, Divider } from '@chakra-ui/react'
import { SearchIcon, StarIcon } from '@chakra-ui/icons'
import { db } from '../data/firebase'
import { collection, query, where, getDocs, updateDoc, serverTimestamp, setDoc, getDoc, doc } from 'firebase/firestore'
import ChatsList from './ChatsList'
import { AuthContext } from '../context/AuthContext'

const SearchBar = () => {
  const { currentUser } = useContext(AuthContext)

  const [username, setUsername] = useState()
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  const handleSearch = async (e) => {
    const q = query(collection(db, 'users'), where('displayName', '==', username))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      setUser(doc.data())
    })
  }

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid
    try {
      const res = await getDoc(doc(db, "chats", combinedId))

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] })

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            //photoURL: user.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        })
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            //photoURL: currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        })
      }
    } catch (error) {
      console.log(error)
    }
    setUser(null)
  }

  return (
    <div className='py-[25px]'>
      <span className='font-bold text-[24px] text-text'>Find some friends! 🖐</span>
      <InputGroup className='mt-[10px]'>
        <InputLeftElement children={<SearchIcon color='gray' />} />
        <Input
          variant='filled'
          placeholder='Type friend name...'
          bg='#313338'
          color='#EEEFF0'
          outline='none'
          _focus={{ background: '#313338' }}
          _hover={{ background: '#313338' }}
          onKeyPress={handleSearch}
          onChange={(e) => setUsername(e.target.value)} />
      </InputGroup>
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col justify-start'>
          {user && <div className='flex items-center p-[10px] mt-[20px] hover:bg-secondary transition justify-between rounded-[5px] cursor-pointer' onClick={handleSelect}>
            <div className='flex items-center'>
              <Avatar name={user.displayName} size='md' />
              <div className='flex flex-col ml-[15px]'>
                <span className='font-semibold text-white'>{user.displayName}</span>
              </div>
            </div>
          </div>}
          {user && <Divider/>}
        </div>
      </div>
    </div>
  )
}

export default SearchBar