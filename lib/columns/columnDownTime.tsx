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
import { Downtime } from "../types/type";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";

export const columnsDownTime: ColumnDef<Downtime>[] = [
  {
    accessorKey: "dwnoNdateF",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          DOWNTIME ON DATE
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dwnoNdateF: string = row.getValue("dwnoNdateF");

      return <div className="text-right font-medium">{dwnoNdateF}</div>;
    },
  },
  {
    accessorKey: "dwnoNtimeF",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          DOWNTIME ON TIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dwnoNtimeF: string = row.getValue("dwnoNtimeF");

      return <div className="text-right font-medium">{dwnoNtimeF}</div>;
    },
  },
  {
    accessorKey: "dwntime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          DOWNTIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dwntime: string = row.getValue("dwntime");

      return <div className="text-right font-medium">{dwntime}</div>;
    },
  },
  {
    accessorKey: "descrip",
    header: "DESCRIPTION",
    cell: ({ row }) => {
      const descrip: string = row.getValue("descrip");

      return <div className="text-right font-medium">{descrip}</div>;
    },
  },
  {
    accessorKey: "emaillst",
    header: "EMAIL LIST",
    cell: ({ row }) => {
      const emaillst: string = row.getValue("emaillst");

      return <div className="text-right font-medium">{emaillst}</div>;
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
    accessorKey: "downstsDesc",
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
      const downstsDesc: string = row.getValue("downstsDesc");

      return <div className="text-right font-medium">{downstsDesc}</div>;
    },
  },
  {
    accessorKey: "reCdateF",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          RECORD DATE
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const reCdateF: string = row.getValue("reCdateF");

      return <div className="text-right font-medium">{reCdateF}</div>;
    },
  },
  {
    accessorKey: "recempid",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          REC EMP
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const recempid: string = row.getValue("recempid");

      return <div className="text-right font-medium">{recempid}</div>;
    },
  },
  {
    accessorKey: "oT_STATUS",
    header: "OT",
    cell: ({ row }) => {
      const oT_STATUS: string = row.getValue("oT_STATUS");

      return <div className="text-right font-medium">{oT_STATUS}</div>;
    },
  },
  {
    // id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const downtime = row.original;

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
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(downtime.emaillst.toString())
              }
            >
              Copy EMAIL LIST
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Detail</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
