import clsx from 'clsx'
import React from 'react'
import { Messsage } from '../../../../../interrfaces/messsanger/MessangerStore'

interface ChatContentProps {
  messages: Messsage[]
}

const ChatContent: React.FC<ChatContentProps> = ({messages}) => {
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
              typeMessage={message.userToken === 'rashidov' ? 'me' : 'users'}
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

const ChatContentItem: React.FC<ChatContentItemProps> = ({
  name, 
  color, 
  avatar, 
  message,
  typeMessage, 
}) => {
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
