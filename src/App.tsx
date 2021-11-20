import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from './socket/soket';
import PublicRoute from './routes';
import { USER_CREATE_TOKEN, USER_DESCRIPTION, USER_GET } from './socket/types';
import { SET_USER_TOKEN } from './store/types';
import { useNavigate } from 'react-router-dom';
import './styles/main.scss'
import { RootReducerStore } from './interrfaces/root/RootReducerStore';
import { UserStore } from './interrfaces/user/UserStore';
import { SET_USER_INFO } from './store/types/user.types';

const App: React.FC = () => {
  const userStore = useSelector((store: RootReducerStore) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const user_token = localStorage.getItem('ttUserToken')

    if(userStore.token.length === 0) {
      if (user_token) {
        socket.emit(USER_GET, {token: user_token})
      }
    }


    socket.on('connect', () => {

      socket.on(USER_DESCRIPTION, (data: UserStore) => {
        if(!data) return;
        dispatch({
          type: SET_USER_INFO,
          payload: {...data}
        })

        dispatch({
          type: SET_USER_TOKEN,
          payload: user_token
        })
      })

      socket.on(USER_CREATE_TOKEN, (token: string) => {
        dispatch({type: SET_USER_TOKEN, payload: token})
        navigate('/messanger')
        localStorage.setItem('ttUserToken', token)
      })
    })
  }, [])

  return (
    <div className="App">
      <PublicRoute />
    </div>
  )
}

export default App;
