import { Action } from "./action.interface"

const initState = {}

export const messangerReducer = (state = initState, action: Action) => {
  switch(action.type) {
    default:
      return state
  }
}