import { AllProcess, AllStatus, MenuItem, MonitorDock, ProcessList, SelectDockList } from "./interface"

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
    production_Month: string,
    delivery_Datetime: string,
    dlVdateF: string,
    delivery_Slip: string,
    parts_No: string,
    parts_Colour: string,
    supplier_Code: number,
    supplier_Tag: string,
    supplier_name: string,
    received_Qty: number,
    order_Qty: number,
    diff: number,
    received_Datetime: string,
    reCdateF: string,
    delivery_DockNo: null,
    received_DockNo: null,
    received_User: null,
    isCompleted: true,
    isCompletedDesc: string
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

export type Monitor = {
    monitrid: string,
    ipaddr: string,
    clientid: string,
    clientse: string,
    process: string,
    recdate: string,
    rectime: string,
    recempid: string,
    upddate: string,
    updempid: string,
    alldock: string,
    selectdockList: SelectDockList[],
    processList: ProcessList[],
    monitrdock: MonitorDock[]
}

export type BreakTime = {
    montrid: string,
    brkstrt: string,
    brkendt: string,
    positin: number,
    mdurl: string,
    monitors: null,
    mdurLs: null
}        

export type DeliverStatus = {
    timeamt: number,
    process: string,
    processrec: boolean,
    processpic: boolean,
    processdlv: boolean,
    processrecValue: string,
    processpicValue: string,
    processdlvValue: string,
    crtdate: string,
    crttime: string,
    crtby: string,
    allProcess: AllProcess[]
    allStatus:AllStatus[]
    status: string,
    processList: ProcessList[]
}

export type MasterZone = {
    dlvmnt: string,
    dlvzne: string,
    montip: string,
    pikflg: number,
    dlvflg: number,
    crtdte: number,
    crttme: number,
    crtusr: string,
    upddte: number,
    updtme: number,
    updusr: string
}

export type AdjustTime = {
    $id:string
    D3NUMID: string,
    D3NUMBE: string,
    D3TYPET: string,
    D3ZONEM: string
}

export type PickingDelivery = {
    pklno: string,
    cpino: string,
    dcptno: string,
    prtdsc: null,
    prtclr: string,
    sppcde: string,
    pcrqty: number,
    dlvqty: number,
    dlvzne: string,
    dlvdte: number,
    dlvtme: number,
    kdltfr:string,
    picdte: number,
    pictme: number,
    dlvmnt: string,
    splcsh: string,
    picscn: string,
    dlvscn: string
}

export type MonitorAll =  {
    dcptno: string,
    prtclr: string,
    splcsh: string,
    dlvqty: string,
    dlvzne: string,
    kdltfr: string,
    picdte: string,
    pictme: string
}