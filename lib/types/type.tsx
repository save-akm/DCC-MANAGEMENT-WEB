import { AllProcess, MenuItem } from "./interface"

export type PlanActual = {
    id: string
    production_month:string
    delivery_slip: number
    parts_no: string
    parts_colour: string
    supplier_name:string
    delivery_Datetime:string
    delivery_DockNo:string
    order_Remain_Qty:number
    dlVdateF:string
}

export type MenuSidebar = {
    group: string
    item: MenuItem[]
}

export type Table = {
    table_name:string
    title:string
}

export type ReceiveInQuiry = {
    production_Month:string
    delivery_Slip:string
    parts_No:string
    parts_Colour:string
    supplier_name:string
    order_Qty:number
    received_Qty:number
    dlVdateF:string
    reCdateF:string
    delivery_DockNo:string
    received_DockNo:string
    diff:string
    isCompletedDesc:string
}

export type Downtime = {
    dwnondat: string
    dwnontim: string,
    getDLVdatetimeTicks: number,
    dwnoNdateF: string,
    dwnoNtimeF: string,
    dwntime: number,
    descrip: string,
    emaillst: string,
    process: string,
    processrec: boolean,
    processpic: boolean,
    processdlv: boolean,
    processrecValue: string,
    processpicValue: string,
    processdlvValue: string,
    allProcess:AllProcess[],
    allStatus: AllProcess[],
    downsts: number,
    oT_STATUS: boolean,
    oT_STATUSDesc: string,
    downstsDesc: string,
    recdate: string,
    rectime: string,
    reCdateF: string,
    reCtimeF: string,
    recempid: string,
    upddate: string,
    updempid: string
}

export type CreateDialog = {
    title:string
}