'use client';
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";
import Icon from '@/components/IconLucide'
export default function ToggleTheme()
{
    const { theme , setTheme } = useTheme();
    const [mounted,setMounted] = useState<boolean>();
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
        onClick={()=> setTheme(theme === "dark" ? "light" : "dark")} 
        className="hover:border-hLas hover:border-2">
        <Icon name="moon" className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon name="sun" className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
}