import clsx from 'clsx'
import React from 'react'
import Card from '../../../../../components/Card'

interface ParticipantsItemProps {
  avatar: any
  name: string
  status: 
    | 'online'
    | 'offline'
}

const Participants: React.FC = () => {
  const users: ParticipantsItemProps[] = [
    {
      name: 'Петров Алексей',
      status: 'online',
      avatar: 'ПА',
    },
    {
      name: 'Иванов Александр',
      status: 'offline',
      avatar: 'ИА',
    },
    {
      name: 'Митрофанова Светлана',
      status: 'online',
      avatar: 'МС',
    },
  ]

  return (
    <div className='participants'>
      <Card>
        <div className="participants-header">
          Участники
        </div>
        <div className="participants-container">
          {users.map(user => (
            <ParticipantsItem
              key={user.name} 
              name={user.name}
              avatar={user.avatar} 
              status={user.status === 'online' ? 'online' : 'offline'}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Participants

const ParticipantsItem: React.FC<ParticipantsItemProps> = ({avatar, name, status}) => {
  return (
    <div className="participants-container__item">
      <div className="participants-container__item-info">
        <div className="participants-container__item-info__avatar">
          {avatar}
        </div>
        <div className="participants-container__item-info__name">
          {name}
        </div>
      </div>

      <div className={clsx(
          "participants-container__item-status",
          status === 'online' && 'active'
        )}
      >
        {status}
      </div>
    </div>
  )
}
