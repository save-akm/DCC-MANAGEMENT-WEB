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


export default function DashboardBarChart()
{
    const { theme } = useTheme();
    const [chartData,setChartData] = useState<any>({
        datasets:[],
    });

    const [chrtOptions,setChartOptions] = useState({

    }); 

    useEffect(() => {
        setChartData({
            labels:['Mon','True','Wed','Thurs','Fri','Sat','Sun'],
            datasets:[{
                label:'Actual',
                data:[18127,22201,19490,17938,24182,17842,22475],
                borderColor:'rgb(53,162,235)',
                backgroundColor:'rgb(26,90,235,0.6)'
            },
            {
                label:'Plan',
                data:[18127,22201,19490,17938,24182,17842,22475],
                borderColor:'rgb(255,99,132)',
                backgroundColor:'rgb(255,99,132,0.6)'
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
    },[theme])

    return <Card className='w-full'>
            <CardHeader>
                <CardTitle className='text-xl'>Plan & Actual Daily Report</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-4 h-[400px]'>
                <Bar data={chartData} options={chrtOptions} />
            </CardContent>
        </Card>;
}