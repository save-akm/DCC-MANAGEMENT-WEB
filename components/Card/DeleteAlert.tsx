/* eslint-disable react/display-name */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { forwardRef } from "react";

interface Props {
  description?: string;
}

const DeleteAlert = forwardRef<HTMLButtonElement, Props>(
  ({ description }, ref) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button ref={ref} variant="outline">Delete</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Submit Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
);

export default DeleteAlert;
