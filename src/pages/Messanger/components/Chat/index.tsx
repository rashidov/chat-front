import React from 'react'
import ChatContent from './components/ChatContent'
import ChatForm from './components/ChatForm'
import ChatTitle from './components/ChatTitle'
import './style.scss'

const Chat: React.FC = () => {
  return (
    <div className='chat'>
      <ChatTitle title='Бухгалтерия' />
      <ChatContent />
      <ChatForm />
    </div>
  )
}

export default Chat
