"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ReceiveInQuiry } from "../types/type"
import { CaretSortIcon } from "@radix-ui/react-icons"

 
export const columnsReceive: ColumnDef<ReceiveInQuiry>[] = [
  {
    accessorKey: "production_Month",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          PRD WEEK
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const production_Month:string = row.getValue("production_Month")
  
      return <div className="text-right font-medium">{production_Month}</div>
    },
  },
  {
    accessorKey: "delivery_Slip",
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
      const delivery_Slip:string = row.getValue("delivery_Slip")
  
      return <div className="text-right font-medium">{delivery_Slip}</div>
    },
  },
  {
    accessorKey: "parts_No",
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
      const parts_No:string = row.getValue("parts_No")
  
      return <div className="text-right font-medium">{parts_No}</div>
    },
  },
  {
    accessorKey: "parts_Colour",
    header: "COLOR",
    cell: ({ row }) => {
      const parts_Colour:string = row.getValue("parts_Colour")
  
      return <div className="text-right font-medium">{parts_Colour}</div>
    },
  },
  {
    accessorKey: "supplier_name",
    header: "MAKER",
    cell: ({ row }) => {
      const supplier_name:string = row.getValue("supplier_name")
  
      return <div className="text-right font-medium">{supplier_name}</div>
    },
  },
  {
    accessorKey: "order_Qty",
    header: "ORDER QTY",
    cell: ({ row }) => {
      const order_Qty:string = row.getValue("order_Qty")
  
      return <div className="text-right font-medium">{order_Qty}</div>
    },
  },
  {
    accessorKey: "received_Qty",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          REC QTY
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const received_Qty:string = row.getValue("received_Qty")
  
      return <div className="text-right font-medium">{received_Qty}</div>
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
          DLV DATE/TIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const dlVdateF:string = row.getValue("dlVdateF")
  
      return <div className="text-right font-medium">{dlVdateF}</div>
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
          REC DATE/TIME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const reCdateF:string = row.getValue("reCdateF")
  
      return <div className="text-right font-medium">{reCdateF}</div>
    },
  },
  {
    accessorKey: "delivery_DockNo",
    header: "DLV DOCK",
    cell: ({ row }) => {
      const delivery_DockNo:string = row.getValue("delivery_DockNo")
  
      return <div className="text-right font-medium">{delivery_DockNo}</div>
    },
  },
  {
    accessorKey: "received_DockNo",
    header: "ORDER QTY",
    cell: ({ row }) => {
      const received_DockNo:string = row.getValue("received_DockNo")
  
      return <div className="text-right font-medium">{received_DockNo}</div>
    },
  },
  {
    accessorKey: "diff",
    header: "DIFF",
    cell: ({ row }) => {
      const diff:string = row.getValue("diff")
  
      return <div className="text-right font-medium">{diff}</div>
    },
  },
  {
    accessorKey: "isCompletedDesc",
    header: "IS COMPLETE",
    cell: ({ row }) => {
      const iscomplete:string = row.getValue("isCompletedDesc")
  
      return <div className="text-right font-medium">{iscomplete}</div>
    },
  },
]