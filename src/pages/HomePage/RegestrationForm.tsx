import React from 'react'
import { useDispatch } from 'react-redux'
import Card from '../../components/Card'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { SET_USER_INFO } from '../../store/types'
import './style.scss'
import socket from '../../socket/soket'
import { USER_CREATE } from '../../socket/types'

const RegestrationForm: React.FC = () => {
  const disptach = useDispatch()
  const [fisrtNameState, setFirstNameState] = React.useState<string>('')
  const [lastNameState, setLastNameState] = React.useState<string>('')
  const [positionState, setPositionState] = React.useState<string>('')
  
  const selectOptions = ['оператор WMS', 'бухгалтер']
  const handlerSubbmit = () => {
    if (fisrtNameState.length  < 1 && lastNameState.length  < 1 && positionState.length < 1) return;

    const strAvatar = `${lastNameState[0].toUpperCase() + fisrtNameState[0].toUpperCase()}`
    const newUser = {
      name: `${lastNameState} ${fisrtNameState}`,
      position: positionState,
      avatar: strAvatar,
      color: '#B9A1F8'
    }

    disptach({type: SET_USER_INFO, payload: newUser})
    socket.emit(USER_CREATE, newUser)
  }

  return (
    <div className="home-regForm">
      <Card
        customStyle={{padding: '10% 0'}}
      > 
          <Input 
            value={fisrtNameState} 
            placeholder='имя' 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstNameState(e.target.value)} 
          />
          <Input 
            value={lastNameState} 
            placeholder='фамилия' 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastNameState(e.target.value)} 
          />
          <Select 
            value={positionState}
            placeholder='должность' 
            options={selectOptions} 
            onChange={(str) => setPositionState(str)} 
          />
          <Button 
            text='создать аккаунт' 
            color='blue' 
            onClick={handlerSubbmit} 
          />
      </Card>
    </div>
  )
}

export default RegestrationForm
