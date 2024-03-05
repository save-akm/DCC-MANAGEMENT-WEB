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
import { AdjustTime } from "../types/type";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import DeleteAlert from "@/components/Card/DeleteAlert";
import React from "react";
import EditAdjustTime from "@/components/form/EditAdjustime";

export const columnsAdjustTime: ColumnDef<AdjustTime>[] = [
  {
    accessorKey: "D3ZONEM",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          ZONE
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const d3ZONEM: string = row.getValue("D3ZONEM");

      return <div className="text-left font-medium">{d3ZONEM}</div>;
    },
  },
  {
    accessorKey: "D3NUMBE",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          TIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const d3NUMBE: string = row.getValue("D3NUMBE");

      return <div className="text-left font-medium">{d3NUMBE}</div>;
    },
  },
  {
    accessorKey: "D3TYPET",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          TYPE
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const d3TYPET: string = row.getValue("D3TYPET");

      return <div className="text-left font-medium">{d3TYPET}</div>;
    },
  },
  {
    // id: "actions",
    header: "Actions",
    cell: function Action({ row }){
      const adjusttime = row.original;
      const refForm = React.useRef<HTMLFormElement>(null);
      const refDelete = React.useRef<HTMLButtonElement>(null);
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
                    navigator.clipboard.writeText(adjusttime.D3ZONEM.toString())
                  }
                >
                  Copy Zone Name
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <EditAdjustTime data={adjusttime} ref={refForm}/>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <DeleteAlert ref={refDelete} description={`Delete ZONE : ${adjusttime.D3ZONEM}`}/>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
