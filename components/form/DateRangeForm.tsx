"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addDays } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import * as React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
const FormSchema = z.object({
  period: z.coerce.number({
    required_error: "Period Times is required.",
  }),
});
import { Input } from "../ui/input";
import { useRef } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

export default function DateRangeForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(Date.now()),
    to: addDays(new Date(Date.now()), 7),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      period: 0,
    },
  });

  const formDate = useForm();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    console.log("Date :", date);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>Options</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={ref}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={formDate.control}
                name=""
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Production Date Range</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant={"outline"}
                          className={cn(
                            "w-[300px] justify-start text-left font-normal gap-4 group",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="h-5 w-5 opacity-50 text-pinkeHot-700" />
                          {date?.from ? (
                            date.to ? (
                              <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(date.from, "LLL dd, y")
                            )
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={date?.from}
                          selected={date}
                          onSelect={setDate}
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="period"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Period Times (Minutes)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Period" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Button type="submit" className="gap-2">
                Search
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
