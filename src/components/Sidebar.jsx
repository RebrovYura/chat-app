import React from 'react'
import Search from './Search'
import ChatsList from './ChatsList'
import UserProfileBar from './UserProfileBar'

const Sidebar = ({ handleClick }) => {

    return (
        <div className='grow max-w-[320px] md:max-w-[350px] bg-secondary min-h-[100vh] flex flex-col justify-between'>
            <div className='px-[20px]'>
                <div className='text-[30px] py-[10px] text-center cursor-pointer'>
                    <span className='font-semibold text-[#FFFFFF]'>Chat</span>
                    <span className='font-bold text-[#EF476F]'>Simple</span>
                </div>
                <Search />
                <ChatsList handleClick={handleClick} />
            </div>
            <UserProfileBar />
        </div>
    )
}

export default Sidebar