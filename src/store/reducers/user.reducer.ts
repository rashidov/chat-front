import { Action } from "."
import { UserStore } from "../../interrfaces/user/UserStore"
import { SET_USER_INFO, SET_USER_TOKEN } from "../types"

const initState: UserStore = {
  avatar: '',
  accessToken: '',
  refreshToken: '',
  position: '',
  departament: '',
  email: '',
  filial: '',
  firstName: '',
  lastName: '',
  login: '',
  password: '',
  phone: '',
  isActivated: false
}

export const userReducer = (state = initState, action: Action) => {
  switch(action.type) {

    case SET_USER_INFO:
      return {
        ...state, 
        login: action.payload.login,
        password: action.payload.password,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        position: action.payload.position,
        departament: action.payload.departament,
        filial: action.payload.filial,
        avatar: action.payload.avatar,
        isActivated: action.payload.isActivated,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      }

    case SET_USER_TOKEN:
      return {...state, token: action.payload}

    default:
      return state
  }
}