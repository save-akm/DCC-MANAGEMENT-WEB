"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { PickingDelivery } from "../types/type"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import DeleteAlert from "@/components/Card/DeleteAlert"
import { useRef } from "react"
import EditPicking from "@/components/form/EditPicking"

 
export const columnsPicking: ColumnDef<PickingDelivery>[] = [
  {
    accessorKey: "pklno",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          PKLNO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const pklno:string = row.getValue("pklno")
  
      return <div className="text-right font-medium">{pklno}</div>
    },
  },
  {
    accessorKey: "cpino",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          CPINO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const cpino:string = row.getValue("cpino")
  
      return <div className="text-right font-medium">{cpino}</div>
    },
  },
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
      )
    },
    cell: ({ row }) => {
      const dcptno:string = row.getValue("dcptno")
  
      return <div className="text-right font-medium">{dcptno}</div>
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
      )
    },
    cell: ({ row }) => {
      const prtclr:string = row.getValue("prtclr")
  
      return <div className="text-right font-medium">{prtclr}</div>
    },
  },
  {
    accessorKey: "sppcde",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          SPPCDE
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const sppcde:string = row.getValue("sppcde")
  
      return <div className="text-right font-medium">{sppcde}</div>
    },
  },
  {
    accessorKey: "pcrqty",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          PCRQTY
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const pcrqty:string = row.getValue("pcrqty")
  
      return <div className="text-right font-medium">{pcrqty}</div>
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
      )
    },
    cell: ({ row }) => {
      const dlvqty:string = row.getValue("dlvqty")
  
      return <div className="text-right font-medium">{dlvqty}</div>
    },
  },
  {
    accessorKey: "dlvzne",
    header: "DLVZNE",
    cell: ({ row }) => {
      const dlvzne:string = row.getValue("dlvzne")
      return <div className="text-right font-medium">{dlvzne}</div>
    },
  },
  {
    accessorKey: "dlvdte",
    header: "DLVDTE",
    cell: ({ row }) => {
      const dlvdte:string = row.getValue("dlvdte")
      return <div className="text-right font-medium">{dlvdte}</div>
    },
  },
  {
    accessorKey: "dlvdte",
    header: "DLVTME",
    cell: ({ row }) => {
      const dlvtme:string = row.getValue("dlvtme")
      return <div className="text-right font-medium">{dlvtme}</div>
    },
  },
  {
    accessorKey: "kdltfr",
    header: "KDLTFR",
    cell: ({ row }) => {
      const kdltfr:string = row.getValue("kdltfr")
      return <div className="text-right font-medium">{kdltfr}</div>
    },
  },
  {
    accessorKey: "picdte",
    header: "PICDTE",
    cell: ({ row }) => {
      const picdte:string = row.getValue("picdte")
      return <div className="text-right font-medium">{picdte}</div>
    },
  },
  {
    accessorKey: "pictme",
    header: "PICTME",
    cell: ({ row }) => {
      const pictme:string = row.getValue("pictme")
      return <div className="text-right font-medium">{pictme}</div>
    },
  },
  {
    accessorKey: "dlvmnt",
    header: "DLVMNT",
    cell: ({ row }) => {
      const dlvmnt:string = row.getValue("dlvmnt")
      return <div className="text-right font-medium">{dlvmnt}</div>
    },
  },
  {
    accessorKey: "splcsh",
    header: "SPLCSH",
    cell: ({ row }) => {
      const splcsh:string = row.getValue("splcsh")
      return <div className="text-right font-medium">{splcsh}</div>
    },
  },
  {
    accessorKey: "picscn",
    header: "PICSCN",
    cell: ({ row }) => {
      const picscn:string = row.getValue("picscn")
      return <div className="text-right font-medium">{picscn}</div>
    },
  },
  {
    accessorKey: "dlvscn",
    header: "DLVSCN",
    cell: ({ row }) => {
      const dlvscn:string = row.getValue("dlvscn")
      return <div className="text-right font-medium">{dlvscn}</div>
    },
  },
  // {
  //   id: "actions",
  //   header: "Actions",
  //   cell: function Actions({ row }) {
  //     const picking = row.original
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
  //                   navigator.clipboard.writeText(picking.pklno.toString())
  //                 }
  //               >
  //                 Copy Monitor Name
  //               </Button>
  //             </DropdownMenuItem>
  //             <DropdownMenuItem asChild>
  //               <EditPicking ref={refForm} data={picking} />
  //             </DropdownMenuItem>
  //             <DropdownMenuItem asChild>
  //               <DeleteAlert ref={refDelete} />
  //             </DropdownMenuItem>
  //           </div>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]
