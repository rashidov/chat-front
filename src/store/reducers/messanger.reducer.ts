import { Action } from "."
import { addMessage } from "../../helpers/messanger"
import { CorporateRoom, MessangerState, Messsage, UserRoom } from "../../interrfaces/messsanger/MessangerStore"
import { ADD_MESSAGE, SET_CONTENT_TYPE_CHAT } from "../types"

const initState: MessangerState = {
  isActiveContentType: {
    type: "none",
    token: ""
  },
  rooms: {
    user: [],
    corporate: []
  }
}

export const messangerReducer = (state = initState, action: Action) => {
  switch(action.type) {

    case SET_CONTENT_TYPE_CHAT:
      return {...state, isActiveContentType: {
        type: action.payload.type, 
        token: action.payload.token
      }}
    
    case ADD_MESSAGE:
      let newRoomsUser: UserRoom[] = []
      let newRoomsCorporate: CorporateRoom[] = []

      if(action.payload.type === 'corporate') {
        newRoomsUser = state.rooms.user
        newRoomsCorporate = addMessage({
          rooms: state.rooms.corporate,
          payload: action.payload
        })
      }

      if(action.payload.type === 'user') {
        newRoomsCorporate = state.rooms.corporate
        newRoomsUser = addMessage({
          rooms: state.rooms.user,
          payload: action.payload
        })
      }

      return {...state, rooms: {
        user: newRoomsUser,
        corporate: newRoomsCorporate
      }}

    default:
      return state
  }
}



// [
//   {
//     num: 1,
//     name: 'Бухгалтерия',
//     filial: 'РЦ Ханская',
//     type: 'corporate',
//     roomToken: 'asd',
//     messages: [                     // по умолчанию массив messages будет пустой,
//       {                             //  а потом только буду подгружаться сообщения
//         name: 'Петров Андрей',
//         typeMessage: 'notification',
//       },
//       {
//         name: 'Петров Андрей',
//         typeMessage: 'user',
//         avatar: 'ПА',
//         color: '#B9A1F8',
//         message: 'Ох ты ж ё!',
//         userToken: 'myToken'
//       },
//       {
//         name: 'Рашидов Айдар',
//         typeMessage: 'user',
//         avatar: 'РА',
//         color: '#B9A1F8',
//         message: 'Привет',
//         userToken: 'rashidov'
//       }
//     ]
//   },
//   {
//     num: 3,
//     name: 'WMS',
//     filial: 'РЦ Ханская',
//     type: 'corporate',
//     roomToken: 'fgh',
//     messages: [
//       {
//         name: 'Иванов Александр',
//         typeMessage: 'notification',
//       },
//       {
//         name: 'Митрофанова Светлана',
//         typeMessage: 'notification',
//       },
//       {
//         name: 'Сафиуллина Алина',
//         typeMessage: 'notification',
//       },
//     ]
//   },
// ]