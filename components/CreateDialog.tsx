'use client';
import * as React from "react"
import { useMediaQuery } from 'usehooks-ts'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import CreateDowntimeForm from "./form/CreateDowntimeForm";

export default function CreateDialog()
{
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>CREATE</Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-2xl">
              <DialogHeader className="border-b pb-2">
                <DialogTitle>CREATE DOWNTIME</DialogTitle>
                <DialogDescription>
                    Enter your form details below.
                </DialogDescription>
              </DialogHeader>
              <CreateDowntimeForm />
            </DialogContent>
          </Dialog>
        )
      }

      return (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button>CREATE</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>CREATE DOWNTIME</DrawerTitle>
              <DrawerDescription>
                  Enter your form details below.
              </DrawerDescription>
            </DrawerHeader>
              <CreateDowntimeForm />
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )
}