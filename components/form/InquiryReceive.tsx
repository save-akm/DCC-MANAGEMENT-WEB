"use client";
import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "@radix-ui/react-icons";
const formSchema = z.object({
  po: z.string().min(2, {
    message: "PO No. string must be at least 2 characters.",
  }),
  part: z.string().min(2, {
    message: "Part No. string must be at least 2 characters.",
  }),
  receive_date: z.date({
    required_error: "Receive is required.",
  }),
});

export default function InquiryReceive() {
  const ref = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      po: "",
      part: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    ref.current?.reset();
    console.log(values.po);
    console.log(values.part);
    console.log(values.receive_date);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>
          Options
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={ref}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid lg:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="po"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel htmlFor="pono">PO NO</FormLabel>
                    <FormControl>
                      <Input id="pono" placeholder="PO NO" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="part"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel htmlFor="partno">PARTS NO</FormLabel>
                    <FormControl>
                      <Input id="partno" placeholder="PARTS NO" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="receive_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col self-end">
                    <FormLabel htmlFor="receivedate">RECEIVE DATE</FormLabel>
                    <Popover>
                      <PopoverTrigger id="receivedate" asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "min-w-64 justify-start text-left font-normal gap-4",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="h-5 w-5 opacity-50 text-pinkeHot-700" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
