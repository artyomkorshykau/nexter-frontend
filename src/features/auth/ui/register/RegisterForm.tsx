'use client'

import { authStore } from '@/features/auth/model/authStore'
import { RegisterDataType, registerSchema } from '@/features/auth/model/register.schema'
import { authService } from '@/features/auth/service/authService'
import { Button } from '@/shared/components/Button'
import { TextField } from '@/shared/components/TextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { KeyRound, UserRound, UserRoundPen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<RegisterDataType>({ resolver: zodResolver(registerSchema) })

	const { toggleAuthWidget } = authStore()
	watch(() => setError(null))
	const [error, setError] = useState<RegisterDataType | null>(null)
	const { push } = useRouter()

	const { mutate, isPending } = useMutation({
		mutationFn: authService.register,
		mutationKey: ['register'],
		onSuccess: () => {
			push('/dashboard')
		},
		onError: (data: AxiosError<{ message: RegisterDataType }>) => {
			setError(data?.response?.data?.message || null)
		},
	})

	const onSubmit = (data: RegisterDataType) => mutate(data)

	return (
		<div className={`w-[40%] h-full flex justify-center items-start flex-col gap-8 slide-in-right`}>
			<h1 className={`text-4xl`}>Регистрация</h1>

			<form className={` w-full flex justify-center items-start flex-col gap-8`} onSubmit={handleSubmit(onSubmit)}>
				<TextField placeholder={'Имя'} register={register('firstname')} icon={<UserRoundPen color='#3c41b8' />} />
				<TextField placeholder={'Фамилия'} register={register('lastname')} icon={<UserRoundPen color='#3c41b8' />} />
				<TextField
					error={errors?.username?.message || error?.username}
					placeholder={'Никнейм'}
					register={register('username')}
					icon={<UserRound color='#3c41b8' />}
				/>
				<TextField
					error={errors?.password?.message}
					placeholder={'Пароль'}
					register={register('password')}
					type={'password'}
					icon={<KeyRound color='#3c41b8' />}
				/>
				<Button text={'Зарегистрироваться'} disabled={isPending} />
			</form>

			<div className={`flex gap-2`}>
				<p>Уже есть аккаунт?</p>
				<button onClick={() => toggleAuthWidget()} className={`text-primary font-medium active:opacity-85`}>
					Войти
				</button>
			</div>
		</div>
	)
}
