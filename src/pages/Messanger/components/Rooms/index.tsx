import React from 'react'
import CorporateRooms from './components/CorporateRooms'
import UserRooms from './components/UserRooms'
import './style.scss'

const Rooms: React.FC = () => {
  return (
    <div className='rooms'>
      <div className="rooms-container">
        <CorporateRooms />
        <UserRooms />
      </div>
    </div>
  )
}

export default Rooms
