'use client'

import { useAuthStore } from '@/features/auth/model/useAuthStore'
import { LoginForm } from '@/features/auth/login/LoginForm'
import { LoginImage } from '@/features/auth/login/LoginImage'
import { RegisterImage } from '@/features/auth/register/RegisterImage'
import { RegisterForm } from '@/features/auth/register/RegisterForm'


export const AuthWidget = () => {
  
  const { isLogin } = useAuthStore()
  
  return isLogin ?
    <div
      className={ 'flex justify-center items-center w-3/4 h-3/4 bg-white rounded-2xl p-12 slide-top-animation' }
    >
      <LoginForm/>
      <LoginImage/>
    </div>
    :
    <div
      className={ 'flex justify-center items-center w-3/4 h-3/4 bg-white rounded-2xl p-12 slide-top-animation' }
    >
      <RegisterImage/>
      <RegisterForm/>
    </div>
  
}
