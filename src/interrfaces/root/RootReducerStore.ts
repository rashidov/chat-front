import { MessangerState } from "../messsanger/MessangerStore";
import { UserrStore } from "../user/UserStore";

export interface RootReducerStore {
  app: any,
  user: UserrStore
  messanger: MessangerState
}