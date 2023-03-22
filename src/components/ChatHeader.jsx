import React, { useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { RxDotsHorizontal } from 'react-icons/rx'
import { Avatar } from '@chakra-ui/react'

const ChatHeader = ({handleClick}) => {
	const [toggle, setToggle] = useState(false)
	return (
		<div className='flex items-center py-[10px] px-[10px] bg-[#FFFFFF] shadow-headerShadow'>
			<div className='p-[10px] rounded-[5px] bg-[#eee] shadow-buttonShadow cursor-pointer md:hidden' onClick={handleClick}>
				<BiMenuAltLeft />
			</div>
			<div className='flex justify-between items-center w-full px-[30px]'>
				<Avatar name='John Snow' />
				<div className='text-[16px] font-bold'>John Snow</div>
				<div className='cursor-pointer'>
					<RxDotsHorizontal size={25} className='text-text' />
				</div>
			</div>
		</div>
	)
}

export default ChatHeader