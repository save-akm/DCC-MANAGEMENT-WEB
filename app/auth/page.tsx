'use client';
import LoginForm from "@/components/form/LoginForm";

export default function page()
{
    return <div className='mx-auto w-full h-screen flex justify-center items-center bg-[url("/bg/bg-4.jpg")] bg-no-repeat bg-cover bg-center'>
    <div className='space-y-6 bg-transparent py-10 px-10 shadow-lg shadow-slate-600 rounded-lg'>
      <div className='flex flex-col items-center space-y-6 dark:text-black'>
          <h1 className='font-bold text-2xl text-center'>DCC MANAGEMENT</h1>
          <p>Enter your username , password below.</p>
      </div>
      <LoginForm />
    </div>
</div>
}