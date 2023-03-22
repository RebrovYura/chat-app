import React, { useContext, useState } from 'react'
import { Input, InputGroup, InputLeftElement, Avatar } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

import { db } from '../data/firebase'
import { collection, query, where, getDocs, updateDoc, serverTimestamp, setDoc, getDoc, doc } from 'firebase/firestore'
import { AuthContext } from '../context/AuthContext'

const Search = () => {
  const { currentUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
    setUser(null)
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
    setUsername('')
  }

  return (
    <>
      <InputGroup>
        <InputLeftElement children={<Search2Icon color='#675C7C' />} />
        <Input
          placeholder="Let's find some friends!"
          bg='#352C46'
          _placeholder={{ color: '#675C7C' }}
          textColor='#FFFFFF'
          borderColor='none'
          border='none'
          onKeyPress={handleKey}
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
      </InputGroup>
      {
        user && <div className='flex items-center p-[10px] mt-[20px] hover:bg-secondary transition justify-between rounded-[5px] cursor-pointer' onClick={handleSelect}>
          <div className='flex items-center'>
            <Avatar name={user.displayName} size='md' />
            <div className='flex flex-col ml-[15px]'>
              <span className='font-semibold text-white'>{user.displayName}</span>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Search