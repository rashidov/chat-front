import { MessangerState } from "../messsanger/MessangerStore";
import { UserStore } from "../user/UserStore";

export interface RootReducerStore {
  app: any,
  user: UserStore
  messanger: MessangerState
}