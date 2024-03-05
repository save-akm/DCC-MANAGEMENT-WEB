"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columnsBreakTime } from '@/lib/columns/columnBreakTime'
import { breakTimeData } from '@/lib/mockData'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react";
import BreakTime from "./table/BreakTime";
import CreateBreaktimeForm from "./form/CreateBreakTimeForm";

export default function BreakTimeTab() {
  const [tab, setTab] = useState("table");

  const onTabChange = (value:any) => {
    setTab(value);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
        BREAKTIME
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="table" value={tab} onValueChange={onTabChange}>
          <TabsList className="grid max-w-[300px] grid-cols-2 bg-neutral-300">
            <TabsTrigger value="table">DATA TABLE</TabsTrigger>
            <TabsTrigger value="create">CREATE</TabsTrigger>
          </TabsList>
          <TabsContent value="table">
              <BreakTime columns={columnsBreakTime} data={breakTimeData} />
          </TabsContent>
          <TabsContent value="create">
            <CreateBreaktimeForm tab={onTabChange} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
