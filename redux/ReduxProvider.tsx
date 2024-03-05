'use client';

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore,makeStore } from "./store";
import {initialStateAdjust} from './AdjustTimeSlice'
import { AdjustTime } from '@/lib/types/type';

export default function ReduxProvider({children}:Readonly<{
    children:React.ReactNode
    
}>)
{
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
        
      }
    return <Provider store={storeRef.current}>{children}</Provider>
}