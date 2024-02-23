"use server"
import axios from "axios";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import CryptoJS from 'crypto-js'

export async function loginAction (prevState:any,formData:FormData) {
  const CredentialName = formData.get('username');
  const CredentialSecret = formData.get('password');
  const ClientType = formData.get('select')

  const response = await axios({
    method: 'post',
    url: 'http://192.168.34.34:8004/api/authentication',
    headers: {
      'API_KEY': process.env.SECRET_APIKEY,
    },
    data: {
      CredentialName,
      CredentialSecret,
      ClientType
    }
  })

  const authToken = response.data.AuthenToken.split('.');
  const parsedWordArray   = CryptoJS.enc.Base64.parse(authToken[0]);
  let parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
  const timestamp:any = Date.parse(parsedStr);
  
  if(response.status === 200) {
     cookies().set('token',timestamp);
     redirect('/dcc/monitoring/dashboard');
  }
  else
  {
    return {message:response.data.Message}
  }
}

export async function logoutAction (prevState:any,formData:FormData) {
  cookies().delete('token')
}