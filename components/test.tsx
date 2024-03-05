"use client"

import { FC } from 'react';
import useSWR from 'swr'

interface Props {}

const TEST = () => {
    const fetcher = async (url:any) => {
        const res = await fetch(url);
        
        if(!res.ok)
        {
            throw new Error("Can not get data from API..")
        }
        return res.clone().json()
    }

    const {data} = useSWR("https://65dc46f7e7edadead7eb7e26.mockapi.io/downtime",fetcher)
    // console.log('data22 : ',data)
    return <div>
        <ul className='space-y-4'>
            {data?.map((d:any,idx:number) => (
                <li key={idx} className='border border-pinkeHot-400 rounded-lg shadow-sm p-4'>
                    <p>Name: {d.dwnontim}</p>
                    <p>DownTime: {d.dwntime}</p>
                </li>
            ))}
        </ul>
    </div>
};

export default TEST

