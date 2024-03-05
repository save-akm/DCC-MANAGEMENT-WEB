"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { downTimeData } from "@/lib/mockData";
import DownTime from "./table/DownTime";
import { columnsDownTime } from "@/lib/columns/columnDownTime";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CreateDowntimeForm from "./form/CreateDowntimeForm";
import { useState } from "react";

export default function DownTimeTab() {
  const [tab, setTab] = useState("table");

  const onTabChange = (value:any) => {
    setTab(value);
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          DOWNTIME
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="table" value={tab} onValueChange={onTabChange}>
          <TabsList className="grid max-w-[300px] grid-cols-2 bg-neutral-300">
            <TabsTrigger value="table">DATA TABLE</TabsTrigger>
            <TabsTrigger value="create">CREATE</TabsTrigger>
          </TabsList>
          <TabsContent value="table">
              <DownTime columns={columnsDownTime} data={downTimeData}  />
          </TabsContent>
          <TabsContent value="create">
            <CreateDowntimeForm tab={onTabChange} data={""} isData={false}/>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
