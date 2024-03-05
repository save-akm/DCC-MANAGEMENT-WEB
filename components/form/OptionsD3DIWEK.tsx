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
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { CalendarIcon } from "@radix-ui/react-icons";
const formSchema = z.object({
  zone: z.string().min(1, {
    message: "A ZONE is required.",
  }),
});

export default function OptionsD3DIWEK() {
  const ref = useRef<HTMLFormElement>(null);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 0, 1),
    to: addDays(new Date(2024, 0, 1), 31),
  });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    ref.current?.reset();
    console.log(values);
    console.log(date);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Options</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={ref}
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-8"
          >
            <FormItem className="flex flex-col">
              <FormLabel htmlFor="receivedate">Picking Date Range</FormLabel>
              <Popover>
                <PopoverTrigger id="receivedate" asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal gap-4",
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
            <Button type="submit" className="max-w-[300px]">Search</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
