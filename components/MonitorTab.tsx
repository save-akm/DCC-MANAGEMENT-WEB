"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columnsMonitor } from '@/lib/columns/columnMonitor'
import { monitorData } from '@/lib/mockData'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react";
import Monitor from "./table/Monitor";
import CreateMonitorForm from "./form/CreateMonitorForm";

export default function MonitorTab() {
  const [tab, setTab] = useState("table");

  const onTabChange = (value:any) => {
    setTab(value);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          MONITORS
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="table" value={tab} onValueChange={onTabChange}>
          <TabsList className="grid max-w-[300px] grid-cols-2 bg-neutral-300">
            <TabsTrigger value="table">DATA TABLE</TabsTrigger>
            <TabsTrigger value="create">CREATE</TabsTrigger>
          </TabsList>
          <TabsContent value="table">
              <Monitor columns={columnsMonitor} data={monitorData} />
          </TabsContent>
          <TabsContent value="create">
            <CreateMonitorForm tab={onTabChange} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
