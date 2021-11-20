
interface IaddMessage {
  rooms: any
  payload: any
}

export const addMessage = ({rooms, payload}: IaddMessage) => {
  return rooms.map((room: any) => {
    if (room.roomToken !== payload.token) return {...room}

    // const updateMessages = room.messages.unshift({
    //   ...payload.data
    // })
    return {...room, messages: room.messages.concat([{
      ...payload.data
    }])}
    // return {...room, messages: updateMessages}
  })
}


// newRoomsCorporate = state.rooms.corporate.map( room => {
//   if (room.roomToken !== action.payload.token) return {...room}

//   return { ...room, messages: room.messages.concat([{
//     ...action.payload.message
//   }])}
// })