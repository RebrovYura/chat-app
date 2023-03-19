import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {
    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    return (
        <div className='text-text block'>
            {message}
        </div>
    )
}

export default Message