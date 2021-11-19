import React from 'react'
import {MessangerContext} from './context'
import Rooms from './components/Rooms'
import UserRoom from './components/UserRoom'
import CorporateRoom from './components/CorporateRoom'
import './style.scss'

const MessangerPage: React.FC = () => {
  const [isActiveRooms, setIsActiveRooms] = React.useState<boolean>(false)
  const [isActiveCorporateRoom, setIsActiveCorporateRoom] = React.useState<boolean>(true)
  const [isActiveUserRoom, setIsActiveUserRoom] = React.useState<boolean>(false)
  const [typeChat, setTypeChat] = React.useState<string>('')

  const hedlerChatType = (str: string) => {

    if (str === 'corporate') {
      setIsActiveCorporateRoom(true)
      setIsActiveUserRoom(false)
      setIsActiveRooms(false)
    } 

    if (str === 'user') {
      setIsActiveCorporateRoom(false)
      setIsActiveUserRoom(true)
      setIsActiveRooms(false)
    }

    if (str === 'none') {
      setIsActiveCorporateRoom(false)
      setIsActiveUserRoom(false)
      setIsActiveRooms(true)
    }
    
    setTypeChat(str)
  }

  return (
    <MessangerContext.Provider value={{
      typeChat, setTypeChat: hedlerChatType
    }}>
      <div className='messanger'>   
        {isActiveRooms && <Rooms />}
        {isActiveCorporateRoom && <CorporateRoom />}
        {isActiveUserRoom && <UserRoom />}
      </div>
    </MessangerContext.Provider>
  )
}

export default MessangerPage
