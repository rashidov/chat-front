import { AppStore } from "../app/AppStore";
import { MessangerState } from "../messsanger/MessangerStore";
import { UserStore } from "../user/UserStore";

export interface RootReducerStore {
  app: AppStore
  user: UserStore
  messanger: MessangerState
}