"use client"

import Header from '@/components/layout/Header'
import HeaderMobile from '@/components/layout/HeaderMobile';
import Sidebar from '@/components/layout/Sidebar'
import React, { Suspense } from 'react'
import {useAppSelector} from '@/redux/hooks'
import { StyleProvider } from '@ant-design/cssinjs';
import Loading from './loading';
import { Toaster } from "@/components/ui/sonner"

const Layout = ({children} : Readonly<{
    children: React.ReactNode;
  }>) => {
 
  const isOpen =  useAppSelector((state) => state.sidebarSlice.open)

  return (
    <StyleProvider hashPriority="high">
        <div className='flex'>
         <Sidebar />
          <main className={`w-full h-full ${isOpen ? 'lg:pl-72' : ''} transition-all duration-200`}>
            <HeaderMobile />
            <Header />
            <div className='p-8'>
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </div>
          </main>
          <Toaster />
    </div>
    </StyleProvider>
  )
}

export default Layout