"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { masterZoneData } from "@/lib/mockData";
import { columnsMasterZone } from "@/lib/columns/columnMasterZone";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react";
import MasterZone from "./table/MasterZone";
import CreateMasterZoneForm from "./form/CreateMasterZoneForm";

export default function MasterZoneTab() {
  const [tab, setTab] = useState("table");

  const onTabChange = (value:any) => {
    setTab(value);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          Master Zone
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="table" value={tab} onValueChange={onTabChange}>
          <TabsList className="grid max-w-[300px] grid-cols-2 bg-neutral-300">
            <TabsTrigger value="table">DATA TABLE</TabsTrigger>
            <TabsTrigger value="create">CREATE</TabsTrigger>
          </TabsList>
          <TabsContent value="table">
              <MasterZone columns={columnsMasterZone} data={masterZoneData} />
          </TabsContent>
          <TabsContent value="create">
            <CreateMasterZoneForm tab={onTabChange} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
