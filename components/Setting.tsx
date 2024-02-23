'use client';
import Icon from '@/components/IconLucide'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link';

export default function Setting()
{
    return <DropdownMenu>
            <DropdownMenuTrigger>
                <div className='group flex items-center justify-between gap-2 border rounded-[8px] p-2 cursor-pointer'>
                    <p className='group-hover:text-blueHot-500 tracking-wide'>Setting</p>
                    <Icon name='settings' className='group-hover:text-blueHot-500'/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={'/auth'} className='w-full hover:text-blueHot-500 hover:font-medium'>
                    <span>Logout</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
}