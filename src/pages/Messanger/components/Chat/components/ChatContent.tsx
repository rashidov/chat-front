import React from 'react'

const ChatContent: React.FC = () => {
  return (
    <div className='chat-content'>
      <ChatContentItem />
    </div>
  )
}

export default ChatContent

const ChatContentItem: React.FC = () => {
  return (
    <div className="chat-content__item">
      <div className="chat-content__item-userInfo">
        user info
      </div>
      <div className="chat-content__item-message">
        message...
      </div>
    </div>
  )
}
