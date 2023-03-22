import React from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

import { db } from '../data/firebase'
import { collection, query, where, getDocs, updateDoc, serverTimestamp, setDoc, getDoc, doc } from 'firebase/firestore'
import { AuthContext } from '../context/AuthContext'

const Search = () => {
  const { currentUser } = useContext(AuthContext)
  const [username, setUsername] = useState()
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  return (
    <InputGroup>
      <InputLeftElement children={<Search2Icon color='#675C7C' />} />
      <Input placeholder="Let's find some friends!" bg='#352C46' _placeholder={{ color: '#675C7C' }} textColor='#FFFFFF' borderColor='none' border='none' />
    </InputGroup>
  )
}

export default Search