import { create } from 'zustand'
import { AuthStoreType } from '@/features/auth/model/authStore.types'


export const authStore = create<AuthStoreType>( ( set ) => ( {
  
  isLogin: false,
  
  toggleAuthWidget: () => set( ( state ) => ( { isLogin: !state.isLogin } ) )
  
} ) )