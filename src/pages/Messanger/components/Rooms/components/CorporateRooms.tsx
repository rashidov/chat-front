import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducerStore } from '../../../../../interrfaces/root/RootReducerStore'
import RoomItem from './RoomItem'

const CorporateRooms: React.FC = () => {
  const store = useSelector((state: RootReducerStore) => state.messanger )
  const {corporate} = store.rooms

  return (
    <div className="corporate-rooms">
      <div className="rooms-container__title">
        корпоративные диалоги
      </div>
      <div className="corporate-rooms__content">
        {corporate.map(room => (
          <RoomItem 
            name={room.name}
            filial={room.filial}
            type={room.type}
            num={room.num}
            roomToken={room.roomToken}
          />
        ))}
        {/* <RoomItem name="Бухгалтерия" filial='РЦ Ханская' type='corporate' num={19} status='online' /> */}
        {/* <RoomItem name="Склад" filial='РЦ Ханская' type='corporate' num={19} status='online' /> */}
      </div>
    </div>
  )
}

export default CorporateRooms
