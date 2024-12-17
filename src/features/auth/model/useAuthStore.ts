import { create } from 'zustand'


type State = {
  isLogin: boolean
}

type Actions = {
  toggleAuthWidget: () => void
}

type AuthStoreType = State & Actions

export const useAuthStore = create<AuthStoreType>( ( set ) => ( {
  
  isLogin: false,
  
  toggleAuthWidget: () => set( ( state ) => ( { isLogin: !state.isLogin } ) )
  
} ) )