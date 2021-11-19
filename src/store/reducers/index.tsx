import { combineReducers } from 'redux'
import { messangerReducer } from './messanger.reducer'

export const rootReducer = combineReducers({
  messanger: messangerReducer
})