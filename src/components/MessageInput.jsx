// import React, { useContext, useState } from 'react'
// import { InputGroup, Input, Button, Textarea } from '@chakra-ui/react'
// import { AuthContext } from '../context/AuthContext'
// import { ChatContext } from '../context/ChatContext'
// import { updateDoc, doc, arrayUnion, Timestamp, serverTimestamp } from 'firebase/firestore'
// import { db, storage } from '../data/firebase'
// import { v4 as uuid } from 'uuid'
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

// const MessageInput = () => {
//   const [text, setText] = useState('')
//   const [image, setImage] = useState(null)

//   const { currentUser } = useContext(AuthContext)
//   const { data } = useContext(ChatContext)

//   const handleSend = async () => {
//     // if (image) {
//     //   const storageRef = ref(storage, currentUser.displayName)
//     //   const uploadTask = uploadBytesResumable(storageRef, image)

//     //   uploadTask.on(
//     //     () => {
//     //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//     //         await updateDoc(doc(db, 'chats', data.chatId), {
//     //           messages: arrayUnion({
//     //             id: uuid(),
//     //             text,
//     //             senderId: currentUser.uid,
//     //             date: Timestamp.now(),
//     //             image: downloadURL
//     //           })
//     //         })
//     //       })
//     //     }
//     //   )
//     // } else {
//     await updateDoc(doc(db, 'chats', data.chatId), {
//       messages: arrayUnion({
//         id: uuid(),
//         text,
//         senderId: currentUser.uid,
//         date: Timestamp.now()
//       })
//     })
//     // }
//     await updateDoc(doc(db, 'userChats', currentUser.uid), {
//       [data.chatId + '.lastMessage']: {
//         text
//       },
//       [data.chatId + '.date']: serverTimestamp() 
//     })
//     await updateDoc(doc(db, 'userChats', data.user.uid), {
//       [data.chatId + '.lastMessage']: {
//         text
//       },
//       [data.chatId + '.date']: serverTimestamp() 
//     })

//     setText('')
//   }

//   return (
//     <div className='max-w-[600px] min-w-[300px] md:min-w-[500px]'>
//       <InputGroup className='flex items-center'>
//         <Textarea placeholder='Enter your message...' background='#313338' borderColor='#313338' resize='none' value={text} onChange={(e) => setText(e.target.value)} />
//         <div className=' ml-[10px]'>
//           {/* <input type="file" name="" id="" onChange={(e) => setImage(e.target.files[0])} /> */}
//           <Button bg='#06D6A0' _hover={{ background: '#06D6A0' }} onClick={handleSend}>Send</Button>
//         </div>
//       </InputGroup>
//     </div>
//   )
// }

// export default MessageInput

import React, { useContext, useState } from 'react'
import { Input } from '@chakra-ui/react'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { MdSend } from 'react-icons/md'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { updateDoc, doc, arrayUnion, Timestamp, serverTimestamp } from 'firebase/firestore'
import { db, storage } from '../data/firebase'
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const MessageInput = () => {
    const [text, setText] = useState()
    const [image, setImage] = useState(null)
    const { currentUser } = useContext(AuthContext)
    const { data } = useContext(ChatContext)

    const handleSend = async () => {
        // if (image) {
        //   const storageRef = ref(storage, currentUser.displayName)
        //   const uploadTask = uploadBytesResumable(storageRef, image)

        //   uploadTask.on(
        //     () => {
        //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        //         await updateDoc(doc(db, 'chats', data.chatId), {
        //           messages: arrayUnion({
        //             id: uuid(),
        //             text,
        //             senderId: currentUser.uid,
        //             date: Timestamp.now(),
        //             image: downloadURL
        //           })
        //         })
        //       })
        //     }
        //   )
        // } else {
        await updateDoc(doc(db, 'chats', data.chatId), {
            messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now()
            })
        })
        // }
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
            [data.chatId + '.lastMessage']: {
                text
            },
            [data.chatId + '.date']: serverTimestamp()
        })
        await updateDoc(doc(db, 'userChats', data.user.uid), {
            [data.chatId + '.lastMessage']: {
                text
            },
            [data.chatId + '.date']: serverTimestamp()
        })
        setText('')
    }

    return (
        <div className='bg-[#FFF] font-semibold text-[16px] text-text flex items-center gap-x-[10px] md:px-[50px] px-[20px] h-[70px]'>
            <div className='flex md:gap-x-[20px] gap-x-[15px] items-center mr-[10px]'>
                <input type='file' id='file' className='hidden' />
                <label htmlFor='file'>
                    <AiOutlineFileAdd size={25} className='cursor-pointer' />
                </label>
                <HiOutlineEmojiHappy size={25} className='cursor-pointer' />
                <div className='w-[1px] h-[45px] bg-text' />
            </div>
            <Input placeholder='Type something...' variant='unstyled' className='md:text-[18px] text-[14px]' value={text} onChange={(e) => setText(e.target.value)}/>
            <MdSend size={30} className='cursor-pointer' onClick={handleSend}/>
        </div>
    )
}

export default MessageInput