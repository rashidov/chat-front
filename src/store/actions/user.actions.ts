import { gdkr, rtls, stls, tuor } from "../../helpers/userStoreHelpers";
import { UserStore } from "../../interrfaces/user/UserStore";
import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";
import { SET_USER_INFO, SET_USER_INFO_INIT } from "../types";
import { SET_AUTHORIZATION } from "../types/app";
// @ts-ignore: Unreachable code error

export const registrations = (candidat: UserStore) => {
  return async (dispatch: any) => {
    const response = await AuthService.regisration(candidat)

    if (response.status === 200) {
      stls(gdkr(response.data, 'accessToken'))
      dispatch({type: SET_AUTHORIZATION, payload: true})
      dispatch({type: SET_USER_INFO, payload: tuor(response.data)})
    }

  }
}

export const login = ({login, password}:{login: string, password: string}) => {
  return async (dispatch: any) => {
    const response = await AuthService.login(login, password)

    if (response.status === 200) {
      stls(gdkr(response.data, 'accessToken'))
      dispatch({type: SET_AUTHORIZATION, payload: true})
      dispatch({type: SET_USER_INFO, payload: tuor(response.data)})
    }
  }
}

export const logout = () => {
  return async (dispatch: any) => {
    try {
      await AuthService.logout()
      rtls()
      dispatch({type: SET_USER_INFO_INIT})
    } catch (e) {
      console.log(e)
    }
  }
}

export const getUserData = () => {
  return async (dispatch: any) => { 
    const response = await UserService.getUserData()

    if (response.status === 200) {
      dispatch({type: SET_AUTHORIZATION, payload: true})
      dispatch({type: SET_USER_INFO, payload: tuor(response.data)})
    }
  }
}