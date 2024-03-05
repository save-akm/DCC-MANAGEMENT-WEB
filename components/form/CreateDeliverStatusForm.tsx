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

import { type Dayjs } from "dayjs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRef } from "react";
import { Input } from "../ui/input";

const formSchema = z.object({
  process: z.string().min(1, {
    message: "A Process is required.",
  }),
  status: z.string().min(1, {
    message: "A Status is required.",
  }),
  leasetime: z.number().min(1, {
    message: "A Lease Time is required.",
  }),
});
export default function CreateDeliverStatusForm({ tab }: any) {
  const ref = useRef<HTMLFormElement>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      process: "",
      status: "",
      leasetime: 0,
    },
  });


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        ref={ref}
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid md:grid-cols-3 gap-8 pt-4"
      >
        <FormField
          control={form.control}
          name="process"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel htmlFor="delivery_process">Process</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="delivery_process">
                      <SelectValue placeholder="Select a process to display" />
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
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel htmlFor="status_deliver">Status</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="status_deliver">
                      <SelectValue placeholder="Select a status to display" />
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
        <FormField
          control={form.control}
          name="leasetime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel htmlFor="lease_time">Lease Time</FormLabel>
              <FormControl>
                <Input id="lease_time" placeholder="Lease Time.." {...field} />
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
