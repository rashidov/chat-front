import React from 'react'
import Chat from './components/Chat'
// import Rooms from './components/Rooms'
import './style.scss'

const MessangerPage: React.FC = () => {

  return (
    <div className='messanger'>
      {/* <Rooms /> */}
      <Chat />
    </div>
  )
}

export default MessangerPage
