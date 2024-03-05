"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deliverStatusData } from "@/lib/mockData";
import { columnsDeliverStatus } from "@/lib/columns/columnDeliverStatus";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CreateDowntimeForm from "./form/CreateDowntimeForm";
import { useState } from "react";
import DeliverStatus from "./table/DeliverStatus";
import CreateDeliverStatusForm from "./form/CreateDeliverStatusForm";

export default function DeliverStatusTab() {
  const [tab, setTab] = useState("table");

  const onTabChange = (value:any) => {
    setTab(value);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          DELIVERY STATUS
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="table" value={tab} onValueChange={onTabChange}>
          <TabsList className="grid max-w-[300px] grid-cols-2 bg-neutral-300">
            <TabsTrigger value="table">DATA TABLE</TabsTrigger>
            <TabsTrigger value="create">CREATE</TabsTrigger>
          </TabsList>
          <TabsContent value="table">
              <DeliverStatus columns={columnsDeliverStatus} data={deliverStatusData} />
          </TabsContent>
          <TabsContent value="create">
            <CreateDeliverStatusForm tab={onTabChange}  />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
