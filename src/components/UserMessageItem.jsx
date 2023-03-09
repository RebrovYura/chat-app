import React from 'react'
import { Avatar } from '@chakra-ui/react'

const UserMessageItem = () => {
    return (
        <div className='flex items-center p-[20px] hover:bg-slate-100 transition'>
            <Avatar name='Yukio Matsunada' size='md' />
            <div className='flex flex-col ml-[15px]'>
                <span className='font-semibold'>Yukio Matsunada</span>
                <span>Hello there</span>
            </div>
        </div>
    )
}

export default UserMessageItem