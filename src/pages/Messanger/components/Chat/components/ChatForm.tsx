import React from 'react'
import { ChatFormProps } from '..'
import { Button } from '../../../../../components/Button'
import { Input } from '../../../../../components/Input'

const ChatForm: React.FC<ChatFormProps> = ({value, onChange, handlerSubmit}) => {
  return (
    <div className='chat-form'>
      <Input 
        value={value}
        placeholder='Сообщение' 
        onChange={onChange} 
        onKeyEnter={handlerSubmit}
       />
       <Button 
        icon='send'
        onClick={handlerSubmit} 
       />
    </div>
  )
}

export default ChatForm
