"use client"
import { useEffect } from "react";
import { useAppDispatch,useAppSelector } from '@/redux/hooks'
import { fetchAdjustTime } from '@/redux/AdjustTimeSlice'
import AdjustTime from "@/components/table/AdjustTime";
import { columnsAdjustTime } from '@/lib/columns/columnAdjustTime'

export default function AdjustTimePage()
{
    const dispatch = useAppDispatch()
    const adjustTimeData = useAppSelector((state) => state.adjustTimeSlice.dataAdjusttime)

    useEffect(()=> {
        dispatch(fetchAdjustTime())
    },[dispatch,])


    return <div className="grid grid-cols-1">
      <AdjustTime columns={columnsAdjustTime} data={adjustTimeData} />
    </div>;
}