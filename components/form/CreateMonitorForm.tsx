"use client";
import { z } from "zod";
import React, { useEffect, useState } from "react";
import {
  Button as ButtonAnt,
  Transfer,
  type TransferProps,
} from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { useRef } from "react";
import ConfigPrimary from "../ConfigPrimary";

const formSchema = z.object({
  monitor_id: z.string().min(1, {
    message: "A Monitor ID is required.",
  }),
  ip_addr: z.string().min(1, {
    message: "A IP ADDRESS is required.",
  }),
});

interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

export default function CreateMonitorForm({ tab }: any) {
  const { theme } = useTheme();
  const ref = useRef<HTMLFormElement>(null);
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monitor_id: "",
      ip_addr: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };

  useEffect(() => {
    getMock();
  }, []);

  const handleChange = (newTargetKeys: string[]) => {
    setTargetKeys(newTargetKeys);
  };

  const renderFooter: TransferProps["footer"] = (_, info) => {
    if (info?.direction === "left") {
      return (
        <Button
          style={{ float: "left", margin: 5 }}
          onClick={getMock}
        >
          Left button reload
        </Button>
      );
    }
    return (
      <Button
        style={{ float: "right", margin: 5 }}
        onClick={getMock}
      >
        Right button reload
      </Button>
    );
  };

  return (
    <Form {...form}>
      <form ref={ref} onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8 pt-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="monitor_id"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="monitorid">Monitor ID</FormLabel>
                <FormControl>
                  <Input placeholder="Downtime" id="monitorid" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ip_addr"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="ipaddr">IP ADDRESS</FormLabel>
                <FormControl>
                  <Input placeholder="Downtime" id="ipaddr" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-auto overflow-x-auto">
          <ConfigPrimary>
          <Transfer
              dataSource={mockData}
              showSearch
              listStyle={{
                width: `100vw`,
                height: 500,
                color:`${theme === "dark" ? "#b7bac1" : ""}`
              }}
              operations={["to right", "to left"]}
              targetKeys={targetKeys}
              onChange={handleChange}
              render={(item) => `${item.title}-${item.description}`}
              footer={renderFooter}
            />
          </ConfigPrimary>
        </div>
        <Button type="submit" className="w-[300px]">
          Submit
        </Button>
      </form>
    </Form>
  );
}
