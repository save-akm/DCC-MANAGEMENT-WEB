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
import { BreakTime } from "../types/type";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import DeleteAlert from "@/components/Card/DeleteAlert";
import { useRef } from "react";
import EditBreakTime from "@/components/form/EditBreakTime";

export const columnsBreakTime: ColumnDef<BreakTime>[] = [
  {
    accessorKey: "brkstrt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          BREAK TIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const brkstrt: string = row.getValue("brkstrt");

      return <div className="text-right font-medium">{brkstrt}</div>;
    },
  },
  {
    accessorKey: "brkendt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          END TIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const brkendt: string = row.getValue("brkendt");

      return <div className="text-right font-medium">{brkendt}</div>;
    },
  },
  {
    accessorKey: "montrid",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          MONITOR
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const montrid: string = row.getValue("montrid");

      return <div className="text-right font-medium">{montrid}</div>;
    },
  },
  {
    accessorKey: "positin",
    header: "BEGIN POSITION",
    cell: ({ row }) => {
      const positin: string = row.getValue("positin");

      return <div className="text-right font-medium">{positin}</div>;
    },
  },
  {
    // id: "actions",
    header: "Actions",
    cell: function Actions({ row }) {
      const breaktime = row.original;
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
          <DropdownMenuContent align="center">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-col gap-1">
              <DropdownMenuItem asChild>
                <Button
                  variant="outline"
                  onClick={() =>
                    navigator.clipboard.writeText(breaktime.brkstrt.toString())
                  }
                >
                  Copy Break Time
                </Button>
              </DropdownMenuItem>
              {/* <DropdownMenuItem asChild>
                  <EditBreakTime data={breaktime} ref={refForm}/>
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
