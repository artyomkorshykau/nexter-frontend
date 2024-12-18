'use client'

import { TextField } from '@/shared/components/TextField'
import { KeyRound, UserRound } from 'lucide-react'
import { Button } from '@/shared/components/Button'
import { authStore } from '@/features/auth/model/authStore'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginDataType, loginSchema } from '@/features/auth/model/login.schema'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/features/auth/service/authService'


export const LoginForm = () => {
  
  const { toggleAuthWidget } = authStore()
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDataType>( { resolver: zodResolver( loginSchema ) } )
  
  
  const { mutate } = useMutation( {
    mutationFn: authService.login,
    mutationKey: [ 'login' ],
    onSuccess: () => {alert( 'success' )}
  } )
  
  const onSubmit = ( data: LoginDataType ) => mutate( data )
  
  return (
    <div className={ `w-[40%] h-full flex justify-center items-start flex-col gap-8 slide-in-left` }>
      <h1 className={ `text-4xl` }>Вход</h1>
      
      <form
        className={ `w-full flex justify-center items-start flex-col gap-8` }
        onSubmit={ handleSubmit( onSubmit ) }
      >
        <TextField
          error={ errors?.username?.message }
          placeholder={ 'Никнейм' }
          register={ register( 'username' ) }
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