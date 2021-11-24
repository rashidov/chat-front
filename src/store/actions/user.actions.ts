import axios from "axios";
import { UserStore } from "../../interrfaces/user/UserStore";
import { registration_route } from "../../urls";
import { SET_USER_INFO } from "../types";

export const registrations = (candidat: UserStore) => {
  console.log('=== попал в функцию ===')
  // @ts-ignore: Unreachable code error

  return async (dispatch: any) => {
    console.log('=== попал в асинхронный диспач ===')
    const response = await axios.post(registration_route, candidat)
    console.log(response)

    if (response.status === 200) {
      const {user, accessToken, refreshToken} = response.data
      dispatch({type: SET_USER_INFO, payload: {...user, accessToken: accessToken, refreshToken: refreshToken}})
    }

  }
}