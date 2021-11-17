import clsx from 'clsx'
import React from 'react'
import Card from '../../../../../components/Card'

interface RoomItemProps {
  num?: number
  avatar?: any
  type: string
  name: string
  filial: string
  status?: 'online' | 'offline'
  position?: string
  departament?: string
}

const RoomItem: React.FC<RoomItemProps> = ({name, filial, type, departament, avatar, position, num, status}) => {
  return (
    <div className="rooms-container__item">
      <RoomCardContainerLeft 
        type={type} 
        name={name}
        avatar={avatar}
        position={position}
      />
      <RoomCardContainerRight 
        num={num}
        type={type} 
        filial={filial}
        status={status}
        departament={departament}
      />
    </div>
  )
}

export default RoomItem

interface RoomCardContainerLeftProps {
  type: string
  name: string
  avatar?: any 
  position?: string 
}

const RoomCardContainerLeft: React.FC<RoomCardContainerLeftProps> = ({type, name, avatar, position}) => {

  type AvatarContentProps = {avatar?: any}
  const AvatarContent: React.FC<AvatarContentProps> = ({avatar}) => (
    <div className="rooms-container__item-leftCard-main__container-avatar">
      {avatar && avatar}
    </div>
  )

  type NameConetntProps = {name: string}
  const NameConetnt: React.FC<NameConetntProps> = ({name}) => (
      <div className={clsx(
        "rooms-container__item-leftCard-main__container-name", 
        type !== 'corporate' && 'indent'
      )}
    >
      {name}
    </div>
  )

  type MainProps = {name: string, avatar: any}
  const Main: React.FC<MainProps> = ({name}) => (
    <div className="rooms-container__item-leftCard-main">
      <div className="rooms-container__item-leftCard-main__container">
        {type !== 'corporate' && <AvatarContent avatar={avatar} /> }
        <NameConetnt name={name} />
      </div>
    </div>
  )

  type SubProps = {position?: string}
  const Sub: React.FC<SubProps> = ({position}) => (
    <div className="rooms-container__item-leftCard-sub">
      {position && position}
    </div>
  )

  return (
    <div className="rooms-container__item-leftCard">
      <Card>
        <Main name={name} avatar={avatar} />
        {type !== 'corporate' && <Sub position={position} />}
      </Card>
    </div>
  )
}

interface RoomCardContainerRightProps {
  num?: number
  type: string
  filial: string
  status?: string
  departament?: string
}

const RoomCardContainerRight: React.FC<RoomCardContainerRightProps> = ({type, filial, departament, num, status}) => {

  type FilialContentProps = {filial: string}
  const FilialContent: React.FC<FilialContentProps> = ({filial}) => (
    <div className="rooms-container__item-rightCard-main__container-filial">
      {filial}
    </div>
  )

  type DepartamentContentProps = {departament?: string}
  const DepartamentContent: React.FC<DepartamentContentProps> = ({departament}) => (
    <div className="rooms-container__item-rightCard-main__container-departament">
      {departament && departament}
    </div>
  )

  type NumberUsersProps = {num?: number}
  const NumberUsers: React.FC<NumberUsersProps> = ({num}) => (
    <div className="rooms-container__item-rightCard-sub__container-number">
      {num && num} участников
    </div>
  )
  
  type StatusContentProps = {status?: string}
  const StatusContent: React.FC<StatusContentProps> = () => (
    <div className={clsx(
        "rooms-container__item-rightCard-sub__container-status", 
        status === 'online' && 'active'
      )}
    >
      {status === 'online' ? 'online' : 'offline'}
    </div>
  )

  type MainProps = {filial: string, departament?: string}
  const Main: React.FC<MainProps> = ({filial}) => (
    <div className="rooms-container__item-rightCard-main">
      <div className="rooms-container__item-rightCard-main__container">
        <FilialContent filial={filial} />
        {type !== 'corporate' && <DepartamentContent departament={departament} />} 
      </div>
    </div>
  )

  type SubProps = {num?: number, status?: string}
  const Sub: React.FC<SubProps> = ({num}) => (
    <div className="rooms-container__item-rightCard-sub">
      <div className="rooms-container__item-rightCard-sub__container">
        {type === 'corporate' && <NumberUsers num={num} />}
        {type !== 'corporate' && <StatusContent />}
      </div>
    </div>
  )

  return (
    <div className="rooms-container__item-rightCard">
      <Card>
        <Main filial={filial} departament={departament} />
        <Sub num={num} status={status} />
      </Card>
    </div>  
  ) 
}