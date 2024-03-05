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

import { ConfigProvider, TimePicker } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRef } from "react";

const formSchema = z.object({
  monitor: z.string().min(1, {
    message: "A Monitor is required.",
  }),
});
export default function CreateBreaktimeForm({ tab }: any) {
  const ref = useRef<HTMLFormElement>(null);
  const formattime = "HH:mm";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monitor: "",
    },
  });

  const [value, setValue] =
    useState<[start: Dayjs | null, end: Dayjs | null]>();
  const onChange = (time: [start: Dayjs | null, end: Dayjs | null]) => {
    setValue(time);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    console.log(value);
  }
  return (
    <Form {...form}>
      <form
        ref={ref}
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-8 pt-4"
      >
        <FormItem className="flex flex-col">
          <FormLabel htmlFor="breaktime">Break time</FormLabel>
          <FormControl id="breaktime">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#00b96b",
                },
              }}
            >
              <TimePicker.RangePicker
                value={value}
                onChange={onChange}
                minuteStep={30}
                hourStep={1}
                format={formattime}
                size="large"
              />
            </ConfigProvider>
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormField
          control={form.control}
          name="monitor"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel htmlFor="monitor">Monitor</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="monitor">
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="max-w-[300px]">
          Submit
        </Button>
      </form>
    </Form>
  );
}
