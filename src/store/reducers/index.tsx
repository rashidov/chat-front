import { combineReducers } from 'redux'
import { RootReducerStore } from '../../interrfaces/root/RootReducerStore'
import { appReducer } from './app.reducer'
import { messangerReducer } from './messanger.reducer'
import { userReducer } from './user.reducer'

export interface Action {
  type: string
  payload: any
}

export const rootReducer = combineReducers<RootReducerStore>({
  app: appReducer,
  user: userReducer,
  messanger: messangerReducer
})