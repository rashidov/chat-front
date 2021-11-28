import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import socket from './socket/soket';
import PublicRoute from './routes';
import { USER_CREATE_TOKEN, USER_DESCRIPTION, USER_GET } from './socket/types';
import { SET_USER_TOKEN } from './store/types';
import { RootReducerStore } from './interrfaces/root/RootReducerStore';
import { UserStore } from './interrfaces/user/UserStore';
import { SET_USER_INFO } from './store/types/user.types';
import './styles/main.scss'
import { getUserData } from './store/actions/user.actions';
import { tnls } from './helpers/userStoreHelpers';

const App: React.FC = () => {
  const userStore = useSelector((store: RootReducerStore) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const store = useSelector((store: RootReducerStore) => store.app)
  const {isAuthorization} = store

  React.useEffect(() => {
    if (isAuthorization) navigate('/messanger');
  }, [isAuthorization])

  React.useEffect(() => {
    const user_token = localStorage.getItem(tnls)

    if (user_token) dispatch(getUserData());


    // устаревший функционал!
    if(userStore.accessToken!.length === 0) {
      if (user_token) socket.emit(USER_GET, {token: user_token})
    }

    socket.on('connect', () => {

      socket.on(USER_DESCRIPTION, (data: UserStore) => {
        if(!data) return;
        dispatch({type: SET_USER_INFO, payload: {...data}})
        dispatch({type: SET_USER_TOKEN, payload: user_token })
        navigate('/messanger')
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
