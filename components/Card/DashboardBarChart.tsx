'use client';
import React,{useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import { useTheme } from 'next-themes';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip, 
    Legend,
} from "chart.js";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip, 
    Legend,
)

interface Props{
    cat:string[]
    series:{
        name:string
        data:number[]
        dataA:number[]
        dataB:number[]
    }[]
}

export default function DashboardBarChart({cat,series} : Props)
{
    const { theme } = useTheme();
    const [chartData,setChartData] = useState<any>({
        datasets:[],
    });

    const [chrtOptions,setChartOptions] = useState({

    }); 

    useEffect(() => {
        setChartData({
            labels:cat,
            datasets:[{
                label:series[1].name,
                data:series[1].data,
                borderColor:'rgb(144, 91, 204)',
                backgroundColor:'rgb(144, 91, 204,0.8)'
            },
            {
                label:series[0].name,
                data:series[0].data,
                borderColor:'rgb(41, 113, 160)',
                backgroundColor:'rgb(142, 193, 225,1)'
            }
        ]
        })

        setChartOptions({
            plugins:{
                legend:{
                    position:'top'
                },
                title:{
                    display:true,
                    text:'Daily Revenue'
                }
            },
            maintainAspectRatio:false,
            responsive:true,
            scales:{
                x:
                {
                    type:"category",
                    grid:
                    {
                        color:() => {
                            return theme === 'dark' ? '#525252' : 'rgb(209 213 219)'
                        },

                    }
                },
                y:
                {
                    beginAtZero:true,
                    grid:
                    {
                        color:() => {
                            return theme === 'dark' ? '#525252' : 'rgb(209 213 219)'
                        }
                    }
                },
            }
        })
    },[cat, series, theme])

    return <Card className='w-full'>
            <CardHeader>
                <CardTitle className='text-xl'>Plan & Actual Daily Report</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-4 h-[400px]'>
                <Bar data={chartData} options={chrtOptions} />
            </CardContent>
        </Card>;
}