"use client"
import React from 'react'
import UserItem from '../UserItem'
import {
    Command,
    CommandGroup,
    CommandList,

  } from "@/components/ui/command"
import { menuList } from '@/lib/menuList'
import Setting from '../Setting'
import { MenuSidebar } from '@/lib/types/type'
import { MenuItem } from '@/lib/types/interface'
import MenuLink from './MenuLink'

const Sidebar = () => {
 
  return (
    <div className='fixed flex flex-col w-72 gap-4 min-w-72 border-r min-h-screen p-4'>
      <div className=''>
        <UserItem />
      </div>
      <div className='grow overflow-auto'>
       <Command className='overflow-visible'>
        <CommandList className='overflow-visible'>
            {menuList.map((menu:MenuSidebar, key:number) => (
                <CommandGroup key={key} heading={menu.group}>
                {menu.item.map((item:MenuItem,itemKey:number) => (
                    <MenuLink item={item} key={item.link}/>
                ))}
              </CommandGroup>
            ))}
        </CommandList>
       </Command>
      </div>
      <Setting />
    </div>
  )
}

export default Sidebar