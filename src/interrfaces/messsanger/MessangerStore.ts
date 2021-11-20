
export interface MessangerState {
  isActiveContentType: WhathContent
  rooms: {
    user: UserRoom[]
    corporate: CorporateRoom[]
  }
}

export interface CorporateRoom {
  num: number       // колличество участников в комнате
  name: string
  type: 'corporate'
  filial: string
  roomToken: string // по нему можно получить сообщения данной комнаты
  messages: Messsage[]
}

export interface UserRoom {
  avatar: any
  name: string
  type: 'user'
  filial: string
  positon: string
  roomToken: string
  departament: string
  messages: Messsage[]
  status: 'online' | 'offline'
}

export interface Messsage {
  avatar?: any       // под вопросом, сокрее всего сделаю запрос на аву по токену пользователя
  name: string
  color?: string
  message?: string 
  userToken?: string
  typeMessage: 'user' | 'notification'
}

export interface WhathContent {
  token: string
  type: 'none'
    | 'corporate'
    | 'user'
}