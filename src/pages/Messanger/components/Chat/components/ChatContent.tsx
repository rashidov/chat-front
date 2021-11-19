import clsx from 'clsx'
import React from 'react'

const ChatContent: React.FC = () => {

  const messages = [
    {
      typeMessage: 'users',
      avatar: 'МС',
      message: 'message... 1',
      name: 'Митрофанова Светлана',
      color: '#7788EE'
    },
    {
      typeMessage: 'me',
      message: 'message... 2',
    },
    {
      typeMessage: 'users',
      avatar: 'МС',
      message: 'message... 4',
      name: 'Митрофанова Светлана',
      color: '#7788EE'
    },
    {
      typeMessage: 'notification',
      name: 'Митрофанова Светлана',
    },
    {
      typeMessage: 'users',
      avatar: 'ИА',
      message: 'message... 5',
      name: 'Иванов Александр',
      color: '#FFCC40'
    },    
    {
      typeMessage: 'users',
      avatar: 'ПА',
      message: 'message... 6',
      name: 'Петров Алексей',
      color: '#B9A1F8'
    },
    {
      typeMessage: 'notification',
      name: 'Петров Алексей',
    },
    {
      typeMessage: 'notification',
      name: 'Иванов Александр',
    },
  ]

  return (
    <div className='chat-content'>
      {messages.map((message, index) => (
        message.typeMessage === 'notification'
          ? <ChatContentNotification 
              name={message.name} 
              key={message.name + `${index}`} 
              />
          : <ChatContentItem 
              name={message.name}
              avatar={message.avatar}
              color={message.color}
              message={message.message}
              key={message.name + `${index}`}
              typeMessage={message.typeMessage === 'me' ? 'me' : 'users'}
            />
      ))}
    </div>
  )
}

export default ChatContent

interface ChatContentItemProps {
  avatar?: any
  name?: string
  message?: string
  color?: string
  typeMessage:
    | 'me'
    | 'users' 
}

const ChatContentItem: React.FC<ChatContentItemProps> = ({name, avatar, typeMessage, color, message}) => {
  return (
    <div className={clsx('chat-content__item', typeMessage === 'me' && 'me')}>
      <div 
        className={clsx('chat-content__item-avatar', typeMessage === 'me' && 'me')}
        style={{background: color}}
      >
        {avatar}
      </div>
      <div className="chat-content__item-content">
        <div className={clsx('chat-content__item-content__name', typeMessage === 'me' && 'me')}>
          {name}
        </div>
        <div className="chat-content__item-content__message">
          {message}
        </div>
      </div>
    </div>
  )
}

const ChatContentNotification: React.FC<{name?: string}> = ({name}) => (
  <div className="chat-content__notification">
    новый участник: {name}
  </div>
)
