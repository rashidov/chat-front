import React from 'react';
import { useDispatch } from 'react-redux';
import socket from './socket/soket';
import PublicRoute from './routes';
import { USER_CREATE_TOKEN } from './socket/types';
import { SET_USER_TOKEN } from './store/types';
import './styles/main.scss'
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    socket.on('connect', () => {
      console.log('=== socket ===', socket)

      socket.on(USER_CREATE_TOKEN, token => {
        dispatch({type: SET_USER_TOKEN, payload: token})
        navigate('/messanger')
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
