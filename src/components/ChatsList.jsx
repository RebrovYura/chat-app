import React from 'react'
import ChatListItem from './ChatListItem'

const ChatsList = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-center py-[20px]'>
        <span className='uppercase text-text font-semibold text-[16px]'>
          — Your chats —
        </span>
      </div>
      <div className='max-h-[70vh] md:max-h-[350] overflow-auto overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-input scrollbar-track-rounded-[5px] scrollbar-thumb-text scrollbar-thumb-rounded-[5px]'>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </div>
      {/* <div className='text-center py-[20px]'>
        <span className='uppercase text-text font-semibold text-[16px]'>
          — Other chats —
        </span>
      </div>
      <div className='max-h-[170px] md:max-h-[350] overflow-auto overflow-x-hidden  scrollbar scrollbar-thin scrollbar-track-input scrollbar-track-rounded-[5px] scrollbar-thumb-text scrollbar-thumb-rounded-[5px]'>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </div> */}
    </div>
  )
}

export default ChatsList