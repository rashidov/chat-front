
export interface UserStore {
  login: string
  password: string
  firstName: string
  lastName: string
  email: string
  phone: string
  position: string
  departament: string
  filial: string
  avatar: string
  isActivated: boolean
  accessToken?: string
  refreshToken?: string
}