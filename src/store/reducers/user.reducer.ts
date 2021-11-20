import { Action } from "."
import { UserStore } from "../../interrfaces/user/UserStore"
import { SET_USER_INFO, SET_USER_TOKEN } from "../types"

const initState: UserStore = {
  avatar: '',
  color: '',
  name: '',
  token: '',
  position: ''
}

export const userReducer = (state = initState, action: Action) => {
  switch(action.type) {

    case SET_USER_INFO:
      return {
        ...state, 
        name: action.payload.name,
        color: action.payload.color,
        avatar: action.payload.avatar,
        position: action.payload.position,
      }

    case SET_USER_TOKEN:
      return {...state, token: action.payload}

    default:
      return state
  }
}