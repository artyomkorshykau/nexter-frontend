'use client'

import { authStore } from '@/features/auth/model/authStore'
import { LoginForm } from '@/features/auth/ui/login/LoginForm'
import { LoginImage } from '@/features/auth/ui/login/LoginImage'
import { RegisterImage } from '@/features/auth/ui/register/RegisterImage'
import { RegisterForm } from '@/features/auth/ui/register/RegisterForm'


export const AuthWidget = () => {
  
  const { isLogin } = authStore()
  
  return isLogin
    
    ? <div className={ 'flex justify-center items-center w-3/4 h-3/4 bg-white rounded-2xl p-12 slide-top-animation' }>
      <LoginForm/>
      <LoginImage/>
    </div>
    
    : <div className={ 'flex justify-center items-center w-3/4 h-3/4 bg-white rounded-2xl p-12 slide-top-animation' }>
      <RegisterImage/>
      <RegisterForm/>
    </div>
  
}
