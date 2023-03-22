import React, { useContext, useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { RxDotsHorizontal } from 'react-icons/rx'
import { Avatar } from '@chakra-ui/react'
import { ChatContext } from '../context/ChatContext'

const ChatHeader = ({handleClick}) => {
	const [toggle, setToggle] = useState(false)
	const {data} = useContext(ChatContext)

	return (
		<div className='flex items-center py-[10px] px-[10px] bg-[#FFFFFF] shadow-headerShadow'>
			<div className='p-[10px] rounded-[5px] bg-[#eee] shadow-buttonShadow cursor-pointer md:hidden' onClick={handleClick}>
				<BiMenuAltLeft />
			</div>
			<div className='flex justify-between items-center w-full px-[30px]'>
				<Avatar name={data.user.displayName} />
				<div className='text-[18px] font-bold text-secondary'>{data.user.displayName || 'Select chat'}</div>
				<div className='cursor-pointer'>
					<RxDotsHorizontal size={25} className='text-text' />
				</div>
			</div>
		</div>
	)
}

export default ChatHeader