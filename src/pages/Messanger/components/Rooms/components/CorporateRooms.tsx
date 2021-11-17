import React from 'react'
import RoomItem from './RoomItem'

const CorporateRooms: React.FC = () => {
  return (
    <div className="corporate-rooms">
      <div className="rooms-container__title">
        корпоративные диалоги
      </div>
      <div className="corporate-rooms__content">
        <RoomItem name="Бухгалтерия" filial='РЦ Ханская' type='corporate' />
      </div>
    </div>
  )
}

export default CorporateRooms
