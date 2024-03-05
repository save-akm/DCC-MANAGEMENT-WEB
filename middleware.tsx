import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

  try{

    const token = request.cookies.get("auth")?.value
    const date = Date.now()
     
    // if(date > parseInt(token))
    // {   
    //     return NextResponse.redirect(new URL('/auth/login',request.url))
    // }
    // else
    // {
    //     const requestHeaders = new Headers(request.headers);
    //      requestHeaders.set('user',JSON.stringify({id:payload.id,role:payload.role,roleName:payload.roleName}));
    //     const response =  NextResponse.next({
    //     request:{
    //       headers:requestHeaders
    //     }
    //     }) 

    //     return response 
    // }
    
  }
  catch(error){
    return NextResponse.redirect(new URL('/auth/login',request.url))
  }
}

export const config = {
    matcher: '/dcc/:path*',
}