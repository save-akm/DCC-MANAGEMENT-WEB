"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { downTimeData } from "@/lib/mockData";
import DownTime from "./table/DownTime";
import { columnsDownTime } from "@/lib/columns/columnDownTime";
import CreateDialog from "./CreateDialog";

export default function DownTimeTable() {
  return (
    <Card>
      <CardHeader >
        <CardTitle>
          <p className='text-xl'>Plan & Actual Daily Report</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-24">
          <CreateDialog />
        </div>
        <DownTime columns={columnsDownTime} data={downTimeData} />
      </CardContent>
    </Card>
  );
}
