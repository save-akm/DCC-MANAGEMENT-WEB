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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef } from "react";
import { Input } from "../ui/input";

const formSchema = z.object({
  monitorname: z.string().min(1, {
    message: "A Monitor Name is required.",
  }),
  deliveryzone: z.string().min(1, {
    message: "A Delivery Zone is required.",
  }),
  pickingflag: z.string().min(1, {
    message: "A Picking Flag is required.",
  }),
  deliveryflag: z.string().min(1, {
    message: "A Delivery flag is required.",
  }),
});
export default function CreateMasterZoneForm({ tab }: any) {
  const ref = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monitorname: "",
      deliveryzone: "",
      deliveryflag: "",
      pickingflag:""
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
        className="grid md:grid-cols-2 gap-8 pt-4"
      >
        <FormField
          control={form.control}
          name="monitorname"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel htmlFor="master_monitorname">Monitoring Name</FormLabel>
              <FormControl>
                <Input id="master_monitorname" placeholder="Monitoring Name.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deliveryzone"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel htmlFor="master_deliveryzone">Delivery Zone</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="master_deliveryzone">
                      <SelectValue placeholder="Select a delivery zone to display" />
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
          name="pickingflag"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel htmlFor="master_pickingflag">Picking Flag</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="master_pickingflag">
                      <SelectValue placeholder="Select a picking flag to display" />
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
          name="deliveryflag"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel htmlFor="master_deliveryflag">Delivery Flag</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="master_deliveryflag">
                      <SelectValue placeholder="Select a delivery flag to display" />
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
