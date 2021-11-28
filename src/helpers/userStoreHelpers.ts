// t- token, n- name, ls- local storage
export const tnls = 'token'

export const tuor = ({user, accessToken, refreshToken}:{user: object, accessToken: string, refreshToken:string}) => {
  return {...user, accessToken: accessToken, refreshToken: refreshToken}
}
// g- get value, d- data, k- key, r- response from server
export const gdkr = (obj: any, key: string) => {
  return obj[key]
}

// s- save, t- token , ls- local storage
export const stls = (token: string) => {
  localStorage.setItem(tnls, token)
}

// r- remove, t- token , ls- local storage
export const rtls = () => {
  localStorage.removeItem(tnls)
}

// g- get, t- token , ls- local storage
export const gtls = () => {
  return localStorage.getItem(tnls)
}