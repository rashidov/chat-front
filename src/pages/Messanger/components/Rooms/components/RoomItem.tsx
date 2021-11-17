import React from 'react'
import Card from '../../../../../components/Card'

interface RoomItemProps {
  type: string
  name: string
  filial?: string
}

const RoomItem: React.FC<RoomItemProps> = ({name, filial, type}) => {
  return (
    <div className="rooms-container__item">
      <RoomCardContainerLeft 
        type={type} 
      />
      <RoomCardContainerRight 
        type={type} 
      />
    </div>
  )
}

export default RoomItem

interface RoomCardContainerLeftProps {
  type: string
}

const RoomCardContainerLeft: React.FC<RoomCardContainerLeftProps> = ({type}) => {
  return (
    <div className="rooms-container__item-leftCard">
      <Card>
        <div className="rooms-container__item-leftCard-main">
          <div className="rooms-container__item-leftCard-main__container">

          </div>
        </div>
        {type !== 'corporate' &&
          <div className="rooms-container__item-leftCard-sub">
            должность
          </div>
        }
      </Card>
    </div>
  )
}

interface RoomCardContainerRightProps {
  type: string
}

const RoomCardContainerRight: React.FC<RoomCardContainerRightProps> = ({type}) => {
  return (
    <div className="rooms-container__item-rightCard">
      <Card>
        <div className="rooms-container__item-leftCard-main">
          
        </div>
        <div className="rooms-container__item-leftCard-sub">

        </div>
      </Card>
    </div>
  ) 
}