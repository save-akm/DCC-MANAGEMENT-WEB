"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columnsNotComplete , columnsEarlyReceive } from "@/lib/columns/columnMonthly";
import {columnsReceive} from '@/lib/columns/columnReceive'
import { monthlyData } from "@/lib/mockData";
import MonthlyNotComplete from "./MonthlyNotComplete";
import MonthlyEarlyReceive from "./MonthlyEarlyReceive";
import { Table } from "@/lib/types/type";

export default function TableComponent({table_name,title} : Table) {

  const pickTable = (table_name : string) => {
    switch(table_name)
    {
      case 'notcomplete' : return (<MonthlyNotComplete columns={columnsNotComplete} data={monthlyData} />)
      case 'early' : return (<MonthlyEarlyReceive columns={columnsEarlyReceive} data={monthlyData} />)
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
