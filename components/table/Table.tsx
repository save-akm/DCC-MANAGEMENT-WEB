"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columnsEarlyReceive } from "@/lib/columns/columnMonthly";
import { columnsAdjustTime } from '@/lib/columns/columnAdjustTime'
import { columnsPicking } from '@/lib/columns/columnPicking'
import { columnsDelivery } from '@/lib/columns/columnDelivery'
import { columnsMonitorAll } from '@/lib/columns/columnMonitorAll'
import {columnsReceive} from '@/lib/columns/columnReceive'
import { monthlyData,pickingData,monitorAllData } from "@/lib/mockData";
import MonthlyEarlyReceive from "./MonthlyEarlyReceive";
import { Table } from "@/lib/types/type";
import AdjustTime from "./AdjustTime";
import Picking from "./Picking";
import Delivery from "./Delivery";
import MonitorAll from "./MonitorAll";
import { useAppSelector } from '@/redux/hooks'

export default function TableComponent({table_name,title} : Table) {

  const adjustTimeData = useAppSelector((state) => state.adjustTimeSlice.dataAdjusttime)

  const pickTable = (table_name : string) => {
    switch(table_name)
    {
      case 'adjusttime' : return (<AdjustTime columns={columnsAdjustTime} data={adjustTimeData} />)
      case 'receive' : return (<MonthlyEarlyReceive columns={columnsEarlyReceive} data={monthlyData} />)
      case 'picking' : return (<Picking columns={columnsPicking} data={pickingData} />)
      case 'delivery' : return (<Delivery columns={columnsDelivery} data={pickingData} />)
      case 'monitorall' : return (<MonitorAll columns={columnsMonitorAll} data={monitorAllData} />)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {pickTable(table_name)}
      </CardContent>
    </Card>
  );
}
