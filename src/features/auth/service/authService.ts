import { LoginDataType } from '@/features/auth/model/login.schema'
import { RegisterDataType } from '@/features/auth/model/register.schema'
import { instance } from '@/shared/api/axiosInstance'

export const authService = {
	async register(data: RegisterDataType) {
		const res = await instance.post('auth/register', data)
		return res.data
	},

	async login(data: LoginDataType) {
		const res = await instance.post('auth/login', data)
		return res.data
	},
}
