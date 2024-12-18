'use client'

import { TextField } from '@/shared/components/TextField'
import { KeyRound, UserRound, UserRoundPen } from 'lucide-react'
import { Button } from '@/shared/components/Button'
import { authStore } from '@/features/auth/model/authStore'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/features/auth/service/authService'
import { RegisterDataType, registerSchema } from '@/features/auth/model/register.schema'


export const RegisterForm = () => {
  
  const { toggleAuthWidget } = authStore()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterDataType>( { resolver: zodResolver( registerSchema ) } )
  
  const { mutate } = useMutation( {
    mutationFn: authService.register,
    mutationKey: [ 'register' ],
    onSuccess: () => {alert( 'success' )}
  } )
  
  const onSubmit = ( data: RegisterDataType ) => mutate( data )
  
  return (
    <div className={ `w-[40%] h-full flex justify-center items-start flex-col gap-8 slide-in-right` }>
      <h1 className={ `text-4xl` }>Регистрация</h1>
      
      <form
        className={ ` w-full flex justify-center items-start flex-col gap-8` }
        onSubmit={ handleSubmit( onSubmit ) }
      >
        <TextField
          placeholder={ 'Имя' }
          register={ register( 'firstname' ) }
          icon={ <UserRoundPen color="#3c41b8"/> }
        />
        <TextField
          placeholder={ 'Фамилия' }
          register={ register( 'lastname' ) }
          icon={ <UserRoundPen color="#3c41b8"/> }
        />
        <TextField
          error={ errors?.username?.message }
          placeholder={ 'Никнейм' }
          register={ register( 'username' ) }
          icon={ <UserRound color="#3c41b8"/> }
        />
        <TextField
          error={ errors?.password?.message }
          placeholder={ 'Пароль' }
          register={ register( 'password' ) }
          type={ 'password' }
          icon={ <KeyRound color="#3c41b8"/> }
        />
        <Button text={ 'Зарегистрироваться' }/>
      </form>
      
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