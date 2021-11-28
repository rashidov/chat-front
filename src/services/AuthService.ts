import $api from "../http"
import {AxiosResponse} from 'axios'
import { IUserResponse } from "../interrfaces/user/IUserResponse"
import { IUserRequest } from "../interrfaces/user/IUserRequest"

export default class AuthService {
  static async login(login: string, password: string) : Promise<AxiosResponse<IUserResponse>> {
    return $api.post('/login', {login, password})
  }

  static async regisration(user: IUserRequest): Promise<AxiosResponse<IUserResponse>> {
    return $api.post('/registration', {...user})
  }

  static async logout(): Promise<void> {
    return $api.get('/logout')
  }
}