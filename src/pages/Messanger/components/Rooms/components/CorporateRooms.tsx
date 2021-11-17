import React from 'react'
import RoomItem from './RoomItem'

const CorporateRooms: React.FC = () => {
  return (
    <div className="corporate-rooms">
      <div className="rooms-container__title">
        корпоративные диалоги
      </div>
      <div className="corporate-rooms__content">
        <RoomItem name="Бухгалтерия" filial='РЦ Ханская' type='corporate' num={19} status='online' />
        <RoomItem name="Склад" filial='РЦ Ханская' type='corporate' num={19} status='online' />
      </div>
    </div>
  )
}

export default CorporateRooms
