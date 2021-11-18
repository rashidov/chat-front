import React from 'react'
import { Button } from '../../../../../components/Button'
import { Input } from '../../../../../components/Input'

const ChatForm: React.FC = () => {
  return (
    <div className='chat-form'>
      <Input 
        value=''
        placeholder='Сообщение' 
        onChange={() => console.log('change input')} 
       />
       <Button icon='send' />
    </div>
  )
}

export default ChatForm
