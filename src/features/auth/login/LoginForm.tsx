'use client'

import { TextField } from '@/shared/components/TextField'
import { KeyRound, UserRound } from 'lucide-react'
import { Button } from '@/shared/components/Button'
import { authStore } from '@/features/auth/model/auth.store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginDataType, loginSchema } from '@/features/auth/login/model/login.schema'


export const LoginForm = () => {
  
  const { toggleAuthWidget } = authStore()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDataType>( { resolver: zodResolver( loginSchema ) } )
  
  const onSubmit = ( data: LoginDataType ) => console.log( data )
  
  return (
    <div className={ `w-[40%] h-full flex justify-center items-start flex-col gap-8 slide-in-left` }>
      <h1 className={ `text-4xl` }>Вход</h1>
      
      <form
        className={ `w-full flex justify-center items-start flex-col gap-8` }
        onSubmit={ handleSubmit( onSubmit ) }
      >
        <TextField
          error={ errors?.nickname?.message }
          placeholder={ 'Никнейм' }
          register={ register( 'nickname' ) }
          icon={ <UserRound color="#3c41b8"/> }
        />
        <TextField
          error={ errors?.password?.message }
          placeholder={ 'Пароль' }
          type={ 'password' }
          register={ register( 'password' ) }
          icon={ <KeyRound color="#3c41b8"/> }
        />
        <Button text={ 'Войти' }/>
      </form>
      
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