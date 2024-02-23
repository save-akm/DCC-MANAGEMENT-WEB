"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columnsNotComplete , columnsEarlyReceive } from "@/lib/columns/columnMonthly";
import { monthlyData } from "@/lib/mockData";
import MonthlyNotComplete from "./table/MonthlyNotComplete";
import MonthlyEarlyReceive from "./table/MonthlyEarlyReceive";

export default function MonthlyTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p>Plan & Actual Daily Report</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="notcomplete">
          <TabsList className="grid max-w-[300px] grid-cols-2 bg-neutral-300">
            <TabsTrigger value="notcomplete">Not Complete</TabsTrigger>
            <TabsTrigger value="early">Early Delay Receive</TabsTrigger>
          </TabsList>
          <TabsContent value="notcomplete">
            <MonthlyNotComplete columns={columnsNotComplete} data={monthlyData} />
          </TabsContent>
          <TabsContent value="early">
            <MonthlyEarlyReceive columns={columnsEarlyReceive} data={monthlyData} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
