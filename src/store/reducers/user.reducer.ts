import { Action } from "."
import { UserrStore } from "../../interrfaces/user/UserStore"

const initState: UserrStore = {
  avatar: 'РА',
  color: '#B9A1F8',
  name: 'Рашидов Айдар',
  token: 'rashidov'
}

export const userReducer = (state = initState, action: Action) => {
  switch(action.type) {
    default:
      return state
  }
}