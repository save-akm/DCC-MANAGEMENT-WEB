"use client"
import React from 'react'

const UserItem = () => {
  return (
    <div className='flex items-center justify-between gap-2 border rounded-[8px] p-2 cursor-pointer'>
      <div className="avatar flex items-center justify-center rounded-full min-h-10 min-w-10 bg-blueHot-500 text-white font-[700]">
        <p>AM</p>
      </div>
      <div className='grow overflow-hidden'>
        <p className='text-[16px] font-bold truncate'>Akaraphon Monkhong</p>
        <p className='text-[12px] text-neutral-500'>admin</p>
      </div>
    </div>
  )
}

export default UserItem
