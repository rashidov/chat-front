import React from 'react'
import { Button } from '../../../../components/Button'
import { MessangerContext } from '../../context'
import Chat from '../Chat'
import Options from './components/Options'
import Participants from './components/Participants'
import './style.scss'

const CorporateRoom: React.FC = () => {
  const {setTypeChat} = React.useContext(MessangerContext)

  return (
    <div className='corporate-room'>
      <div className="corporate-room__header">
        <Button 
          icon='backspace' 
          onClick={() => setTypeChat('none')}
        />
        <span className='goToBackRooms'>Сообщения: список</span>
      </div>
      <div className="corporate-room__container">
        <Participants />
        <Chat />
        <Options />
      </div>
    </div>
  )
}

export default CorporateRoom
