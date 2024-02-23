import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import React from 'react'


const layout = ({children} : Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='flex items-start justify-between'>
         <Sidebar />
          <main className=" w-full h-full pl-72">
            <Header />
            <div className='p-8'>
              {children}
            </div>
          </main>
    </div>
  )
}

export default layout