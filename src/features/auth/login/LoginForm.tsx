'use client'

import { TextField } from '@/shared/components/TextField'
import { KeyRound, UserRound } from 'lucide-react'
import { Button } from '@/shared/components/Button'
import { useAuthStore } from '@/features/auth/model/useAuthStore'


export const LoginForm = () => {
  
  const { toggleAuthWidget } = useAuthStore()
  
  return (
    <div className={ `w-[40%] h-full flex justify-center items-start flex-col gap-8 slide-in-left` }>
      <h1 className={ `text-4xl` }>Вход</h1>
      <TextField
        placeholder={ 'Никнейм' }
        icon={ <UserRound color="#3c41b8"/> }
      />
      <TextField
        placeholder={ 'Пароль' }
        icon={ <KeyRound color="#3c41b8"/> }
      />
      <Button text={ 'Войти' }/>
      <div className={ `flex gap-2` }>
        <p>Нет аккаунта?</p>
        <button
          onClick={ () => toggleAuthWidget() }
          className={ `text-primary font-medium active:opacity-85` }>Зарегистрироваться
        </button>
      </div>
    </div>
  )
}