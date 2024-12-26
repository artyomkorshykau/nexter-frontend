'use client'

import { authStore } from '@/features/auth/model/authStore'
import { LoginDataType, loginSchema } from '@/features/auth/model/login.schema'
import { authService } from '@/features/auth/service/authService'
import { Button } from '@/shared/components/Button'
import { TextField } from '@/shared/components/TextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { KeyRound, UserRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<LoginDataType>({ resolver: zodResolver(loginSchema) })

	const { toggleAuthWidget } = authStore()
	watch(() => setError(null))
	const [error, setError] = useState<LoginDataType | null>(null)
	const { push } = useRouter()

	const { mutate, isPending } = useMutation({
		mutationFn: authService.login,
		mutationKey: ['login'],
		onSuccess: () => {
			push('/dashboard')
		},
		onError: (data: AxiosError<{ message: LoginDataType }>) => {
			setError(data?.response?.data?.message || null)
		},
	})

	const onSubmit = (data: LoginDataType) => mutate(data)

	return (
		<div className={`w-[40%] h-full flex justify-center items-start flex-col gap-8 slide-in-left`}>
			<h1 className={`text-4xl`}>Вход</h1>

			<form className={`w-full flex justify-center items-start flex-col gap-8`} onSubmit={handleSubmit(onSubmit)}>
				<TextField
					error={errors?.username?.message || error?.username}
					placeholder={'Никнейм'}
					register={register('username')}
					icon={<UserRound color='#3c41b8' />}
				/>
				<TextField
					error={errors?.password?.message || error?.password}
					placeholder={'Пароль'}
					type={'password'}
					register={register('password')}
					icon={<KeyRound color='#3c41b8' />}
				/>
				<Button text={'Войти'} disabled={isPending} />
			</form>

			<div className={`flex gap-2`}>
				<p>Нет аккаунта?</p>
				<button onClick={() => toggleAuthWidget()} className={`text-primary font-medium active:opacity-85`}>
					Зарегистрироваться
				</button>
			</div>
		</div>
	)
}
