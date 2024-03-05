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
import {  forwardRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Downtime } from "@/lib/types/type";
import dayjs, { type Dayjs } from 'dayjs';
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import ConfigPrimary from "../ConfigPrimary";
import { TimePicker } from "antd";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  downondate: z.date({
    required_error: "A Downtime on date is required.",
  }),
  downontime:z.instanceof(dayjs as unknown as typeof Dayjs,{
    message:"A Downtime on time is required."
  }),
  downtime: z.string().min(1, {
    message: "A Downtime is required.",
  }),
  descrip: z.string().trim(),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  // .refine((e) => e === "abcd@fg.com", "This email is not in our database")
});

interface Props {
  data:Downtime,
}

const EditDownTime = forwardRef<HTMLFormElement,Props>((props, ref) => {
  const formattime = 'HH:mm';
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      downondate:new Date(props.data.dwnondat),
      downontime:dayjs(props.data.dwnoNtimeF, formattime),
      downtime:props.data.dwntime.toString(),
      descrip:props.data.descrip,
      email:props.data.emaillst
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
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit DownTime</DialogTitle>
          <DialogDescription>
            Make changes to your Downtime here. Click Submit when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
      <form ref={ref} onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-8 pt-4">
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="downondate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="downondate">Downtime on date</FormLabel>
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
                      id="downondate"
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
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="downno_time">Downtime on time</FormLabel>
                <FormControl >
                  <ConfigPrimary>
                  <TimePicker id="downno_time" className="bg-transparent" minuteStep={30} hourStep={1} format={formattime} size="large" {...field} />
                  </ConfigPrimary>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="downtime"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="down_time">Downtime</FormLabel>
                <FormControl>
                  <Input placeholder="Downtime" id="down_time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6">
          <FormField
              control={form.control}
              name="descrip"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel htmlFor="downtimedescription">Description</FormLabel>
                  <FormControl>
                  <Textarea placeholder="Type your description here." id="downtimedescription" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="downtimeemail">Email</FormLabel>
                <FormControl>
                <Textarea placeholder="Type your email here." id="downtimeemail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="max-w-[300px]">Submit</Button>
      </form>
    </Form>
      </DialogContent>
    </Dialog>
  );
});

export default EditDownTime;
