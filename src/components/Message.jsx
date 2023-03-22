// import React, { useContext } from 'react'
// import { AuthContext } from '../context/AuthContext'
// import { ChatContext } from '../context/ChatContext'
// import { Avatar } from '@chakra-ui/react'

// const Message = ({message}) => {
//     const {currentUser} = useContext(AuthContext)
//     const {data} = useContext(ChatContext)

//     const userMessage = message.senderId == currentUser.uid ? `${currentUser.displayName}` : `${data.user.displayName}` 
//     return (
//         <div className={`flex text-text gap-x-[10px] items-center mb-[20px] ${message.senderId == currentUser.uid ? 'flex-row-reverse' : 'flex-row'}`}>
//             <Avatar name={userMessage}/>
//             <div className='max-w-[300px]'>
//                 <div className={`flex ${message.senderId == currentUser.uid ? 'justify-end items-center' : ''}`}>{userMessage}</div>
//                 <div>{message.text}</div>
//             </div>
//         </div>
//     )
// }

// export default Message