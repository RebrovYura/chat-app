// import { useRef, useState } from 'react'
// import { Button, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, Drawer, useDisclosure, DrawerOverlay, DrawerFooter } from '@chakra-ui/react'
// import { HamburgerIcon, ArrowBackIcon } from '@chakra-ui/icons'
// import { auth } from '../data/firebase'
// import { signOut } from 'firebase/auth'

// import Navbar from './Navbar'
// import SearchBar from './SearchBar'
// import ChatsList from './ChatsList'

// const Sidebar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const btnRef = useRef()

//   return (
//     <div className='pt-[10px] pl-[10px]'>
//       <div className='text-text h-full mx-[10px] lg:flex flex-col justify-between py-[20px] hidden '>
//         <Navbar />
//         <SearchBar />
//         <div className='h-full'>
//           <ChatsList />
//         </div>
//         <div className='text-center'>
//           <Button variant='outline' border='2px solid' borderColor='#EF476F' color='#EF476F' _hover={{ background: '#EF476F', color: 'white' }} onClick={() => signOut(auth)}>Logout</Button>
//         </div>
//       </div>
//       <div className='bg-secondary rounded-[10px] shadow-buttonShadow w-[50px] h-[50px] flex items-center lg:hidden'>
//         <Button ref={btnRef} onClick={onOpen} bg='transparent' className='text-text' _hover={{ background: '#313338' }}><HamburgerIcon boxSize={6} /></Button>
//         <Drawer
//           isOpen={isOpen}
//           placement='left'
//           onClose={onClose}
//           finalFocusRef={btnRef}
//           size='sm'
//         >
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton className='text-text' width='40px' height='40px'><ArrowBackIcon boxSize={9} /></DrawerCloseButton>
//             <DrawerHeader className='bg-primary'>
//               <Navbar />
//             </DrawerHeader>
//             <DrawerBody className='bg-primary'>
//               <SearchBar />
//               <ChatsList />
//             </DrawerBody>
//             <DrawerFooter justifyContent='center' className='bg-primary'>
//               <Button variant='outline' border='2px solid' borderColor='#EF476F' color='#EF476F' _hover={{ background: '#EF476F', color: 'white' }} onClick={() => signOut(auth)}>Logout</Button>
//             </DrawerFooter>
//           </DrawerContent>
//         </Drawer>
//       </div>
//     </div>
//   )
// }

// export default Sidebar

import React from 'react'
import Search from './Search'
import ChatsList from './ChatsList'
import UserProfileBar from './UserProfileBar'

const Sidebar = ({handleClick}) => {
    return (
        <div className='grow max-w-[320px] md:max-w-[350px] bg-secondary min-h-[100vh] flex flex-col justify-between'>
            <div className='px-[20px]'>
                <div className='text-[30px] py-[10px] text-center'>
                    <span className='font-semibold text-[#FFFFFF]'>Chat</span>
                    <span className='font-bold text-[#EF476F]'>Simple</span>
                </div>
                <Search />
                <ChatsList handleClick={handleClick}/>
            </div>
            <UserProfileBar />
        </div>
    )
}

export default Sidebar