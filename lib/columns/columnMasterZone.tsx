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
import { MasterZone } from "../types/type";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import EditMasterZone from "@/components/form/EditMasterZone";
import { useRef } from "react";
import DeleteAlert from "@/components/Card/DeleteAlert";

export const columnsMasterZone: ColumnDef<MasterZone>[] = [
  {
    accessorKey: "dlvmnt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Monitor Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dlvmnt: string = row.getValue("dlvmnt");

      return (
        <div className="text-right font-medium text-red-500">{dlvmnt}</div>
      );
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
          Delivery Zone
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
    accessorKey: "pikflg",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Picking Flag
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const pikflg: number = row.getValue("pikflg");
      const status = pikflg === 1 ? "Active" : "InActive";
      const cellStyle = () => {
        const colorText = pikflg === 1 ? "#36a20e" : "#3561db";
        const colorBg = pikflg === 1 ? "#bcf89e" : "#c4daf9";
        return {
          color: colorText,
          backgroundColor: colorBg,
        };
      };
      return (
        <button
          style={cellStyle()}
          className="tracking-wide font-medium py-1 px-3 rounded-md "
        >
          {status}
        </button>
      );
    },
  },
  {
    accessorKey: "dlvflg",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Delivery Flag
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dlvflg: number = row.getValue("dlvflg");
      const status = dlvflg === 1 ? "Active" : "InActive";
      const cellStyle = () => {
        const colorText = dlvflg === 1 ? "#36a20e" : "#3561db";
        const colorBg = dlvflg === 1 ? "#bcf89e" : "#c4daf9";
        return {
          color: colorText,
          backgroundColor: colorBg,
        };
      };
      return (
        <button
          style={cellStyle()}
          className="tracking-wide font-medium py-1 px-3 rounded-md"
        >
          {status}
        </button>
      );
    },
  },
  {
    // id: "actions",
    header: "Actions",
    cell: function Actions({ row }) {
      const masterzone = row.original;
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
                    navigator.clipboard.writeText(masterzone.dlvmnt.toString())
                  }
                >
                  Copy Monitor Name
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <EditMasterZone ref={refForm} data={masterzone} />
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
