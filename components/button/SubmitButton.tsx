'use client';
import { useFormStatus } from 'react-dom'
export default function SubmitButton({style} : {style:string})
{
    const { pending } = useFormStatus()
    
    return <button type="submit" aria-disabled={pending} 
    className={`${style} text-white border border-slate-300 p-2 rounded-md bg-cyan-950 hover:bg-cyan-800`}>
      Submit
    </button>
}