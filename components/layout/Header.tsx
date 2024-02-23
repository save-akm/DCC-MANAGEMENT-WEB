'use client';

import Icon from '@/components/IconLucide'
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useState } from "react";
import ToggleTheme from "../ToggleTheme";
import { Notification } from "@/lib/types/interface";
import ToggleSidebar from '../ToggleSidebar';

export default function Header()
{
    const [notification,setNotification] = useState<Notification[]>([
        {
            text:"This is a next features",
            date:"01-01-2025",
            read:true
        },
        {
            text:"This is next features",
            date:"01-01-2025",
            read:false
        },
    ]);

    return <div className="grid grid-cols-2 gap-4 py-4 px-6 border-b">
        <div className='flex items-center gap-4 overflow-hidden'>
            <ToggleSidebar />
            <p className='capitalize text-lg font-bold tracking-wide truncate'>DCC MANAGEMENT</p>
        </div>
        <div className="flex gap-3 items-center justify-end">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="relative hover:border-hLas hover:border-2" variant="outline" size="icon">
                    <div className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notification.find((noti : Notification) => noti.read === true) 
                        ? 'bg-greenPastel-400' : 'bg-neutral-200'}`}></div>
                    <span className="animate-ping absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 bg-greenPastel-400 opacity-75"></span>
                    <Icon name="notebook-pen" className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {notification.map((item: Notification,key:number) => (
                    <DropdownMenuItem key={key}
                     className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                    <div className={`h-3 w-3 rounded-full my-1 ${item.read ? 'bg-pinkeHot-600' : 'bg-neutral-200'}`}></div>
                    <div>
                       <p>{item.text}</p>
                       <p className="text-xs text-neutral-500">{item.date}</p>
                    </div>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="relative hover:border-hLas hover:border-2" variant="outline" size="icon">
                    <div className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notification.find((noti : Notification) => noti.read === true) 
                        ? 'bg-greenPastel-400' : 'bg-neutral-200'}`}></div>
                    <span className="animate-ping absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 bg-greenPastel-400 opacity-75"></span>
                    <Icon name="bell" className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {notification.map((item: Notification,key:number) => (
                    <DropdownMenuItem key={key}
                     className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                    <div className={`h-3 w-3 rounded-full my-1 ${item.read ? 'bg-pinkeHot-600' : 'bg-neutral-200'}`}></div>
                    <div>
                       <p>{item.text}</p>
                       <p className="text-xs text-neutral-500">{item.date}</p>
                    </div>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
            </DropdownMenu>
            <ToggleTheme />
        </div>
    </div>;
}