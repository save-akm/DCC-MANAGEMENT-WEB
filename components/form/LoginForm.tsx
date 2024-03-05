"use client"
import { useFormState } from 'react-dom'
import { useRef, useState } from 'react'
import {loginAction} from '@/app/auth/action';
import SubmitButton from '../button/SubmitButton';;
import Icon from '@/components/IconLucide'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LoginForm()
{
    const ref = useRef<HTMLFormElement>(null);
    const [branch,setBranch] = useState(true);
    const initState = {
        message:''
    };

    const [state,formAction ] = useFormState(loginAction,initState);


    return <form  action={async formData => {
      formAction(formData)
      ref.current?.reset()
    }} ref={ref} className='space-y-6'>
        <div className='w-full flex justify-center'>
          <Select name='select' onValueChange={() => setBranch(false)}>
            <SelectTrigger className="w-[180px] dark:text-black border-cyan-950 shadow-md">
              <SelectValue placeholder="Select a branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={"1"}>PCB</SelectItem>
                <SelectItem value={"2"}>AYT</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='login-inputbox group'>
            <input type='text' name='username' placeholder='Username' className='login-input' autoComplete='off' disabled={branch} required/>
            <i className='login-icon'><Icon name='user'/>
</i>
        </div>
        <div className='login-inputbox group'>
            <input type='password' name='password' placeholder='Password' className='login-input' autoComplete='off' disabled={branch} required/>
            <i className='login-icon'><Icon name='lock' /></i>
        </div>
       
        <SubmitButton style={'w-full'}/>
    </form>
}