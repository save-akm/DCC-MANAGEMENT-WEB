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
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "../ui/label";

const formSchema = z.object({
  downondate: z.date({
    required_error: "A Downtime on date is required.",
  }),
  downontime: z.string({
    required_error: "A Downtime on time is required.",
  }),
  downtime: z.number({
    required_error: "A Downtime is required.",
  }),
  descrip: z.string().trim(),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  // .refine((e) => e === "abcd@fg.com", "This email is not in our database")
});
export default function CreateDowntimeForm() {
  const [date, setDate] = useState<Date>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      downondate: new Date(),
      downontime: "",
      downtime: 0,
      descrip: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-8">
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="downondate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Downtime on date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal gap-4",
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
                    </FormControl>
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
          <FormField
            control={form.control}
            name="downontime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Downtime on time</FormLabel>
                <FormControl>
                  <Input placeholder="down on time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="downtime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Downtime</FormLabel>
                <FormControl>
                  <Input placeholder="Downtime" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6">
          <div className="grid w-full">
            <Label htmlFor="downtimedescription">Description</Label>
            <Textarea placeholder="Type your description here." id="downtimedescription" />
          </div>
          <div className="grid w-full">
            <Label htmlFor="downtimeemail">Email</Label>
            <Textarea placeholder="Type your email here." id="downtimeemail" />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
