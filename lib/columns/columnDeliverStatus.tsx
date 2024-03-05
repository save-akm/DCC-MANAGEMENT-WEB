"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DeliverStatus } from "../types/type";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import EditDeliverStatus from "@/components/form/EditDeliverStatus";
import { useRef } from "react";
import DeleteAlert from "@/components/Card/DeleteAlert";

export const columnsDeliverStatus: ColumnDef<DeliverStatus>[] = [
  {
    accessorKey: "process",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >                                                  
          PROCESS
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const process: string = row.getValue("process");

      return <div className="text-right font-medium">{process}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          STATUS
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      const cellStyle = () => {
        const colorText = status === "CP" ? '#36a20e' : '#dc6e03'
        const colorBg = status === "CP" ? '#bcf89e' : '#fee289'
        return {
          color:colorText,
          backgroundColor:colorBg,
        }
      }

      return <button style={cellStyle()} className="tracking-wide font-medium py-1 px-3 rounded-md ">{status}</button>
    },
  },
  {
    accessorKey: "timeamt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          LEASE TIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const timeamt: string = row.getValue("timeamt");

      return <div className="text-right font-medium">{timeamt}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: function Actions ({ row }) {
      const deliverStatus = row.original;
      const refForm = useRef<HTMLFormElement>(null);
      const refDelete = useRef<HTMLButtonElement>(null);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-col gap-1">
              <DropdownMenuItem asChild>
                <Button
                  variant="outline"
                  onClick={() =>
                    navigator.clipboard.writeText(deliverStatus.process.toString())
                  }
                >
                  Copy Process
                </Button>
              </DropdownMenuItem>
              {/* <DropdownMenuItem asChild>
                  <EditDeliverStatus data={deliverStatus} ref={refForm}/>
              </DropdownMenuItem> */}
              <DropdownMenuItem asChild>
                <DeleteAlert ref={refDelete} />
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
