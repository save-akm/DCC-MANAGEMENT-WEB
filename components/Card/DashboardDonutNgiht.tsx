'use client';
import React,{useState,useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from 'next-themes';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip, 
    Legend,
    ArcElement
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip, 
    Legend,
    ArcElement
)

export default function DashboardDonutNgiht()
{
    const [chartData,setChartData] = useState<any>({
        datasets:[],
    });
    const [chrtOptions,setChartOptions] = useState({}); 
    const { theme } = useTheme();

    useEffect(() => {
        
        setChartData({
            labels:['Actual','Pending'],
            datasets:[{
                label:'value',
                data:[64,37],
                borderColor:['rgba(153, 102, 255)','rgba(75, 192, 192)'],
                backgroundColor:[`rgba(153, 102, 255,${theme === 'dark' ? 1 : 0.6}`,`rgba(75, 192, 192,${theme === 'dark' ? 1 : 0.6})`]
            },
        ],
        })
        setChartOptions({
            plugins:{
                legend:{
                    position:'top'
                },
                title:{
                    display:true,
                    text:'Night Shift'
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
        <CardTitle className='text-xl'>Receive</CardTitle>
        <CardDescription>Progressive</CardDescription>
    </CardHeader>
    <CardContent className='grid gap-4 h-[400px]'>
        <Doughnut data={chartData} options={chrtOptions} />
    </CardContent>
</Card>;
}