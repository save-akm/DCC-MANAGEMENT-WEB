'use client';
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import Icon from '@/components/IconLucide'
import { useAppDispatch } from "@/redux/hooks";
import { sidebarOpen } from '@/redux/SideBarSlice'
import { useAppSelector } from '@/redux/hooks'
export default function ToggleSidebar()
{
    const isOpen = useAppSelector((state) => state.sidebarSlice.open)
    const [mounted,setMounted] = useState<boolean>();
    
    const dispatch = useAppDispatch()

    useEffect(() => {
        setMounted(true);
    },[])

    if(!mounted)
    {
        return null;
    }
    return <Button  variant="outline"
        size="icon"
        aria-label="Toggle Theme"
        onClick={()=> dispatch(sidebarOpen())} 
        className={`hover:border-2 hidden lg:inline-flex`}>
        <Icon name="chevrons-left" className={`h-5 w-full ${isOpen ? 'transition-all duration-300' : 'rotate-180 transition-all duration-300'}`} />
    </Button>
}