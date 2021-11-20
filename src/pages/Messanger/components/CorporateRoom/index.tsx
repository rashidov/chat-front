import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../../../components/Button'
import { Messsage } from '../../../../interrfaces/messsanger/MessangerStore'
import { RootReducerStore } from '../../../../interrfaces/root/RootReducerStore'
import { ADD_MESSAGE, SET_CONTENT_TYPE_CHAT } from '../../../../store/types'
import Chat from '../Chat'
import Options from './components/Options'
import Participants from './components/Participants'
import './style.scss'

export interface IChatState {
  num: number
  type: string
  title: string
  roomToken: string
  messages: Messsage[]
}

const CorporateRoom: React.FC = () => {
  const dispatch = useDispatch()
  const store = useSelector((state: RootReducerStore) => state.messanger)
  const user = useSelector((state: RootReducerStore) => state.user)
  const {isActiveContentType, rooms} = store
  const [inputState, setInputState] = React.useState<string>('')
  const [chatState, setChatState] = React.useState<IChatState>({
    num: 0,
    type: '',
    title: '',
    roomToken: 'defalut',
    messages: []
  })


  React.useEffect(() => {
    const obj: any = rooms.corporate.find( room => room.roomToken === isActiveContentType.token)
    setChatState({
      num: obj?.num,
      type: obj?.type,
      title: obj?.name,
      roomToken: obj?.roomToken,
      messages: obj?.messages
    })
  }, [store])

  const changeInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setInputState(e.target.value)
  }

  const handlerSubmit = () => {
    if (inputState.length === 0) return;

    dispatch({
      type: ADD_MESSAGE,
      payload: {
        type: chatState.type,
        token: chatState.roomToken,
        data: {
          name: user.name,
          typeMessage: 'user',
          avatar: user.avatar,
          color: user.color,
          userToken: user.token,
          message: inputState
        }
      }
    })

    setInputState('')
  }

  const handlerGoToBack = () => {
    dispatch({ type: SET_CONTENT_TYPE_CHAT, payload: {
      type: 'none',
      token: ''
    }})
  }

  return (
    <div className='corporate-room'>
      <div className="corporate-room__header">
        <Button 
          icon='backspace' 
          onClick={handlerGoToBack}
        />
        <span className='goToBackRooms'>Сообщения: список</span>
      </div>
      <div className="corporate-room__container">
        <Participants />
        <Chat 
          chatState={chatState} 
          options={{
            value: inputState,
            onChange: changeInput,
            handlerSubmit: handlerSubmit
          }}
          />
        <Options />
      </div>
    </div>
  )
}

export default CorporateRoom
