import React from 'react'

interface ChatTitleProps {
  title: string
}

const ChatTitle: React.FC<ChatTitleProps> = ({title}) => (
  <div className='chat-title'>
    {title}
  </div>
)

export default ChatTitle
