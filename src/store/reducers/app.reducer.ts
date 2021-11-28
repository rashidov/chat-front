import { Action } from "."
import { AppStore } from '../../interrfaces/app/AppStore'
import { SET_AUTHORIZATION } from "../types/app"

const initState: AppStore = {
  isAuthorization: false
}

export const appReducer = (state = initState, action: Action) => {
  switch(action.type) {

    case SET_AUTHORIZATION:
      return {...state, isAuthorization: action.payload}

    default: 
      return state
  }
}