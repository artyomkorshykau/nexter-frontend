import { AuthStoreType } from '@/features/auth/model/authStore.types'
import { create } from 'zustand'

export const authStore = create<AuthStoreType>(set => ({
	isLogin: false,

	toggleAuthWidget: () => set(state => ({ isLogin: !state.isLogin })),
}))
