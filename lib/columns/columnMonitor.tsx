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
import { Monitor } from "../types/type";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import EditMonitor from "@/components/form/EditMonitor";
import { useRef } from "react";
import DeleteAlert from "@/components/Card/DeleteAlert";

export const columnsMonitor: ColumnDef<Monitor>[] = [
  {
    accessorKey: "monitrid",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          MONITOR ID
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const monitrid: string = row.getValue("monitrid");

      return <div className="text-right font-medium">{monitrid}</div>;
    },
  },
  {
    accessorKey: "ipaddr",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          IP ADDRESS
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const ipaddr: string = row.getValue("ipaddr");

      return <div className="text-right font-medium">{ipaddr}</div>;
    },
  },
  {
    accessorKey: "clientid",
    header: "CLIENT ID",
    cell: ({ row }) => {
      const clientid: string = row.getValue("clientid");

      return <div className="text-right font-medium">{clientid}</div>;
    },
  },
  {
    accessorKey: "clientse",
    header: "CLIENT SECURITY",
    cell: ({ row }) => {
      const clientse: string = row.getValue("clientse");

      return <div className="text-right font-medium">{clientse}</div>;
    },
  },
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
    // id: "actions",
    header: "Actions",
    cell: function Actions({ row }) {
      const monitor = row.original;
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
            <div className="flex flex-col gap-1">
              <DropdownMenuItem asChild>
                <Button
                  variant="outline"
                  onClick={() =>
                    navigator.clipboard.writeText(monitor.monitrid.toString())
                  }
                >
                  Copy Monitor ID
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                  <EditMonitor data={monitor} ref={refForm} />
              </DropdownMenuItem>
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
