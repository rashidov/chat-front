import React from 'react'
import Rooms from './components/Rooms'
import UserRoom from './components/UserRoom'
import CorporateRoom from './components/CorporateRoom'
import { useSelector } from 'react-redux'
import { RootReducerStore } from '../../interrfaces/root/RootReducerStore'
import './style.scss'

const MessangerPage: React.FC = () => {
  const store = useSelector((state: RootReducerStore) => state.messanger)
  const {isActiveContentType} = store

  return (
    <div className='messanger'>   
      {isActiveContentType.type === 'none' && <Rooms />}
      {isActiveContentType.type === 'user' && <UserRoom />}
      {isActiveContentType.type === 'corporate' && <CorporateRoom />}
    </div>
  )
}

export default MessangerPage
