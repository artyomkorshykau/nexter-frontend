

type State = {
  isLogin: boolean
}

type Actions = {
  toggleAuthWidget: () => void
}

export type AuthStoreType = State & Actions