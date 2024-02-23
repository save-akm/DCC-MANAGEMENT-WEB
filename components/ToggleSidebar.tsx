'use client';
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import Icon from '@/components/IconLucide'
export default function ToggleSidebar()
{
    const [mounted,setMounted] = useState<boolean>();
    const [sidebarOpen, setSidebarOpen] = useState(false);
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
        onClick={()=> setSidebarOpen(!sidebarOpen)} 
        className={`hover:border-2 `}>
        <Icon name="chevrons-left" className={`h-5 w-full ${sidebarOpen ? 'rotate-180 transition-all duration-300' : 'transition-all duration-300'}`} />
    </Button>
}