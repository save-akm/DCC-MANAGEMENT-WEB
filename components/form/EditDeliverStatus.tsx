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
import { forwardRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { DeliverStatus } from "@/lib/types/type";
import { type Dayjs } from "dayjs";
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

interface Props {
  data: DeliverStatus;
}

const EditDeliverStatus = forwardRef<HTMLFormElement, Props>((props, ref) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      process: props.data.process,
      status: props.data.status,
      leasetime: props.data.timeamt,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Edit DeliverStatus</DialogTitle>
          <DialogDescription>
            Make changes to your Deliver Status here. Click Submit when youre done.
          </DialogDescription>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
});

export default EditDeliverStatus;
