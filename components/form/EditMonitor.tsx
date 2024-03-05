/* eslint-disable react/display-name */
"use client";
import { z } from "zod";
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
import { forwardRef, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Downtime, Monitor } from "@/lib/types/type";
import dayjs, { type Dayjs } from "dayjs";
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import ConfigPrimary from "../ConfigPrimary";
import { TimePicker, Transfer, TransferProps } from "antd";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

const formSchema = z.object({
  monitor_id: z.string().min(1, {
    message: "A Monitor ID is required.",
  }),
  ip_addr: z.string().min(1, {
    message: "A IP ADDRESS is required.",
  }),
});

interface Props {
  data: Monitor;
}

const EditMonitor = forwardRef<HTMLFormElement, Props>((props, ref) => {
  const { theme } = useTheme();
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monitor_id: props.data.monitrid,
      ip_addr: props.data.ipaddr,
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
        <Button style={{ float: "left", margin: 5 }} onClick={getMock}>
          Left button reload
        </Button>
      );
    }
    return (
      <Button style={{ float: "right", margin: 5 }} onClick={getMock}>
        Right button reload
      </Button>
    );
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Edit Monitor</DialogTitle>
          <DialogDescription>
            Make changes to your Monitor here. Click Submit when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            ref={ref}
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-8 pt-4"
          >
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
                    color: `${theme === "dark" ? "#b7bac1" : ""}`,
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
      </DialogContent>
    </Dialog>
  );
});

export default EditMonitor;
