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
import { PlanActual } from "../types/type"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"

 
export const columnsNotComplete: ColumnDef<PlanActual>[] = [
  {
    accessorKey: "delivery_slip",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          DLV SLIP
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("delivery_slip")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "parts_no",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          PART NO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("parts_no")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "parts_colour",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          COLOR
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("parts_colour")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "supplier_name",
    header: "MAKER",
    cell: ({ row }) => {
      const status:string = row.getValue("supplier_name")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "delivery_Datetime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          DLV DATE/TIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("delivery_Datetime")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "delivery_DockNo",
    header: "DLV DOCK",
    cell: ({ row }) => {
      const status:string = row.getValue("delivery_DockNo")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "order_Remain_Qty",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          REMAIN QTY
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("order_Remain_Qty")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  // {
  //   id: "actions",
  //   header: "Actions",
  //   cell: ({ row }) => {
  //     const plan = row.original
 
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
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(plan.delivery_slip.toString())}
  //           >
  //             Copy DLV SLIP
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>Edit</DropdownMenuItem>
  //           <DropdownMenuItem>Delete</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]

export const columnsEarlyReceive: ColumnDef<PlanActual>[] = [
  {
    accessorKey: "delivery_slip",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          DLV SLIP
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("delivery_slip")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "parts_no",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          PART NO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("parts_no")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "parts_colour",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
           COLOR
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("parts_colour")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "supplier_name",
    header: "MAKER",
    cell: ({ row }) => {
      const status:string = row.getValue("supplier_name")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "delivery_Datetime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          DLV DATE/TIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("delivery_Datetime")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "dlVdateF",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          REC DATE/TIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("dlVdateF")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "delivery_DockNo",
    header: "DLV DOCK",
    cell: ({ row }) => {
      const status:string = row.getValue("delivery_DockNo")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  {
    accessorKey: "order_Remain_Qty",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          REMAIN QTY
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:string = row.getValue("order_Remain_Qty")
  
      return <div className="text-right font-medium">{status}</div>
    },
  },
  // {
  //   id: "actions",
  //   header: "Actions",
  //   cell: ({ row }) => {
  //     const plan = row.original
 
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
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(plan.delivery_slip.toString())}
  //           >
  //             Copy DLV SLIP
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>Detail</DropdownMenuItem>
  //           <DropdownMenuItem>Edit</DropdownMenuItem>
  //           <DropdownMenuItem>Delete</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]