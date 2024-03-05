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
import { AdjustTime } from "@/lib/types/type";

const formSchema = z.object({
  adjust_zone: z.string().min(1, {
    message: "A Zone is required.",
  }),
  adjust_time: z.coerce.number().nonnegative().min(0, {
    message: "A Time is required.",
  }),
  adjust_type: z.string().min(1, {
    message: "A Type is required.",
  }),
});

interface Props {
  data:AdjustTime,
}

const EditAdjustTime = forwardRef<HTMLFormElement,Props>((props, ref) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adjust_zone: props.data.D3ZONEM,
      adjust_time: parseInt(props.data.D3NUMBE),
      adjust_type: props.data.D3TYPET,
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
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit AdjustTime</DialogTitle>
          <DialogDescription>
            Make changes to your Downtime here. Click Submit when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            ref={ref}
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 pt-4"
          >
            <FormField
              control={form.control}
              name="adjust_zone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="adzone">ZONE</FormLabel>
                  <FormControl>
                    <Input id="adzone" placeholder="Zone..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adjust_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="adtime">TIME</FormLabel>
                  <FormControl>
                    <Input id="adtime" type="number" placeholder="Time..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adjust_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="adtype">TYPE</FormLabel>
                  <FormControl>
                    <Input id="adtype" placeholder="Type..." {...field} />
                  </FormControl>                                                                                                           
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
});

export default EditAdjustTime;
