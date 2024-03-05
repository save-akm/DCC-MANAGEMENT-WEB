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
import { MonitorAll } from "../types/type";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useRef } from "react";
import EditMonitorAll from "@/components/form/EditMonitorAll";
import DeleteAlert from "@/components/Card/DeleteAlert";

export const columnsMonitorAll: ColumnDef<MonitorAll>[] = [
  {
    accessorKey: "dcptno",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          DCPTNO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dcptno: string = row.getValue("dcptno");

      return <div className="text-right font-medium">{dcptno}</div>;
    },
  },
  {
    accessorKey: "prtclr",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          PRTCLR
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const prtclr: string = row.getValue("prtclr");

      return <div className="text-right font-medium">{prtclr}</div>;
    },
  },
  {
    accessorKey: "splcsh",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          SPLCSH
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const splcsh: string = row.getValue("splcsh");

      return <div className="text-right font-medium">{splcsh}</div>;
    },
  },
  {
    accessorKey: "dlvqty",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          DLVQTY
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dlvqty: string = row.getValue("dlvqty");

      return <div className="text-right font-medium">{dlvqty}</div>;
    },
  },
  {
    accessorKey: "dlvzne",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          DLVZNE
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dlvzne: string = row.getValue("dlvzne");

      return <div className="text-right font-medium">{dlvzne}</div>;
    },
  },
  {
    accessorKey: "kdltfr",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          KDLTFR
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const kdltfr: string = row.getValue("kdltfr");

      return <div className="text-right font-medium">{kdltfr}</div>;
    },
  },
  {
    accessorKey: "picdte",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          PICDTE
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const picdte: string = row.getValue("picdte");

      return <div className="text-right font-medium">{picdte}</div>;
    },
  },
  {
    accessorKey: "pictme",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          PICTME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const pictme: string = row.getValue("pictme");

      return <div className="text-right font-medium">{pictme}</div>;
    },
  },
  // {
  //   id: "actions",
  //   header: "Actions",
  //   cell: function Actions({ row }) {
  //     const monitorAll = row.original;
  //     const refForm = useRef<HTMLFormElement>(null);
  //     const refDelete = useRef<HTMLButtonElement>(null);
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <DotsHorizontalIcon className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuSeparator />
  //           <div className="flex flex-col gap-1">
  //           <DropdownMenuItem asChild>
  //               <Button
  //                 variant="outline"
  //                 onClick={() =>
  //                   navigator.clipboard.writeText(monitorAll.dcptno.toString())
  //                 }
  //               >
  //                 Copy Monitor Name
  //               </Button>
  //             </DropdownMenuItem>
  //             <DropdownMenuItem asChild>
  //               <EditMonitorAll ref={refForm} data={monitorAll} />
  //             </DropdownMenuItem>
  //             <DropdownMenuItem asChild>
  //               <DeleteAlert ref={refDelete} />
  //             </DropdownMenuItem>
  //           </div>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
