import { LucideProps } from 'lucide-react';

export interface Notification {
    text:string,
    date:string,
    read:boolean
}

export interface MenuItem {
    link:string
    text:string
    icon:JSX.Element,
    submenu?:boolean
    subMenuItems?:{
        title:string,
        path:string
    }[]
}

export interface AllProcess {
    text: string,
    value: string,
    selectedValue: null,
    values: null
}