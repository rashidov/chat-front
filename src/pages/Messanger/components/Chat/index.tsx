import React from 'react'
import { IChatState } from '../CorporateRoom'
import ChatContent from './components/ChatContent'
import ChatForm from './components/ChatForm'
import ChatTitle from './components/ChatTitle'
import './style.scss'

interface ChatProps {
  chatState: IChatState
  options: ChatFormProps
}

export interface ChatFormProps {
  value: string
  handlerSubmit: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Chat: React.FC<ChatProps> = ({chatState, options}) => (
  <div className='chat'>
    <ChatTitle 
      title={chatState.title} 
    />
    <ChatContent 
      messages={chatState.messages}
    />
    <ChatForm
      value={options.value}
      onChange={options.onChange}
      handlerSubmit={options.handlerSubmit}
    />
  </div>
)

export default Chat
