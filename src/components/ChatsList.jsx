import UserMessageItem from './UserMessageItem'


const ChatsList = () => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='flex flex-col justify-start'>
        <UserMessageItem />
        <UserMessageItem />
        <UserMessageItem />
        <UserMessageItem />
      </div>
    </div>
  )
}

export default ChatsList