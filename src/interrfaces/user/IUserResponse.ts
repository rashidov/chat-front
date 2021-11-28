export interface IUserResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}

export interface IUser {
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
}