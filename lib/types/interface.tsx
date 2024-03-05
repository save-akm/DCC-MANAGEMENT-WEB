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
export interface AllStatus extends AllProcess {
    
}
export interface ProcessList {
    disabled:boolean,
    group:null,
    selected:boolean,
    text:string,
    value:string
}
export interface SelectDockList {
    disabled:boolean,
    group:null,
    selected:boolean,
    text:string,
    value:string
}
export interface MonitorDock {
    clientid:string,
    dockNo:string
}