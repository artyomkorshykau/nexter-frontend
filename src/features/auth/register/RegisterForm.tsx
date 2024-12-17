'use client'

import { TextField } from '@/shared/components/TextField'
import { KeyRound, UserRound, UserRoundPen } from 'lucide-react'
import { Button } from '@/shared/components/Button'
import { useAuthStore } from '@/features/auth/model/useAuthStore'


export const RegisterForm = () => {
  
  const { toggleAuthWidget } = useAuthStore()
  
  return (
    <div className={ `w-[40%] h-full flex justify-around items-start flex-col slide-in-right` }>
      <h1 className={ `text-4xl` }>Регистрация</h1>
      <TextField
        placeholder={ 'Имя' }
        icon={ <UserRoundPen color="#3c41b8"/> }
      />
      <TextField
        placeholder={ 'Фамилия' }
        icon={ <UserRoundPen color="#3c41b8"/> }
      />
      <TextField
        placeholder={ 'Никнейм' }
        icon={ <UserRound color="#3c41b8"/> }
      />
      <TextField
        placeholder={ 'Пароль' }
        icon={ <KeyRound color="#3c41b8"/> }
      />
      <Button text={ 'Зарегистрироваться' }/>
      <div className={ `flex gap-2` }>
        <p>Уже есть аккаунт?</p>
        <button
          onClick={ () => toggleAuthWidget() }
          className={ `text-primary font-medium active:opacity-85` }>Войти
        </button>
      </div>
    </div>
  )
}