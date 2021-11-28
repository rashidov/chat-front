import $api from "../http";
import { AxiosResponse } from "axios";
import { IUserResponse } from "../interrfaces/user/IUserResponse";

export default class UserService {
  static getUserData(): Promise<AxiosResponse<IUserResponse>> {
    return $api.get('/userData')
  }
}