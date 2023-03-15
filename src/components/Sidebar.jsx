import { useRef, useState } from 'react'
import { Button, Divider, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, Drawer, useDisclosure, DrawerOverlay, DrawerFooter } from '@chakra-ui/react'
import { HamburgerIcon, ArrowBackIcon } from '@chakra-ui/icons'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { auth } from '../data/firebase'
import { signOut } from 'firebase/auth'

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <div className='bg-secondary rounded-[10px] shadow-buttonShadow w-[50px] h-[50px] flex items-center'>
      <Button ref={btnRef} onClick={onOpen} bg='transparent' className='text-text' _hover={{background: '#313338'}}><HamburgerIcon boxSize={6}/></Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton className='text-text' width='40px' height='40px'><ArrowBackIcon boxSize={9}/></DrawerCloseButton>
          <DrawerHeader className='bg-primary'>
            <Navbar />
          </DrawerHeader>
          <DrawerBody className='bg-primary'>
            <SearchBar />
          </DrawerBody>
          <DrawerFooter justifyContent='center' className='bg-primary'>
            <Button variant='outline' border='2px solid' borderColor='#EF476F' color='#EF476F' _hover={{background: '#EF476F', color: 'white'}}>Logout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Sidebar