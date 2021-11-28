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
import { login, registrations } from '../../store/actions/user.actions'

const RegestrationForm: React.FC = () => {
  const disptach = useDispatch()
  const [isReg, setIsReg] = React.useState<boolean>(false)
  const [loginState, setLoginState] = React.useState<string>('')
  const [passwordState, setPasswordState] = React.useState<string>('')
  const [fisrtNameState, setFirstNameState] = React.useState<string>('')
  const [lastNameState, setLastNameState] = React.useState<string>('')
  const [positionState, setPositionState] = React.useState<string>('')
  
  const selectOptions = ['оператор WMS', 'бухгалтер']
  const handlerSubbmit = () => {
    if (loginState.length < 1 && passwordState.length < 1) return;

    if (isReg) {
      if (fisrtNameState.length  < 1 && lastNameState.length  < 1 && positionState.length < 1) return;

      const strAvatar = `${lastNameState[0].toUpperCase() + fisrtNameState[0].toUpperCase()}`
      const candidat = {
        login: loginState,
        password: passwordState,
        firstName: fisrtNameState,
        lastName: lastNameState,
        email: '',
        phone: '',
        position: positionState,
        departament: positionState === 'оператор WMS' ? 'склад' : 'бухгалтерия',
        filial: 'РЦ Ханская',
        avatar: strAvatar,
        token: '',
        isActivated: false
      }
      // registrations({...candidat})
      disptach(registrations({...candidat}))
      // disptach({type: SET_USER_INFO, payload: newUser})
      // socket.emit(USER_CREATE, newUser)
    }

    if (!isReg) {
      disptach(login({login: loginState, password: passwordState}))
    }
  }

  return (
    <div className="home-regForm">
      <Card
        customStyle={{padding: '10% 0'}}
      > 
        <Input 
          value={loginState} 
          placeholder='логин' 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginState(e.target.value)} 
        />
        <Input 
          value={passwordState} 
          placeholder='пароль' 
          type='password'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordState(e.target.value)} 
        />
        {isReg &&
        <>
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
        </>
        }
        <Button 
          text={isReg ? 'создать аккаунт' : 'войти'} 
          color='blue' 
          onClick={handlerSubbmit} 
        />
        <br />
        <Button 
          text={isReg ? 'авторизация' : 'регистрация'} 
          color='blue' 
          onClick={() => setIsReg(prev => !prev)} 
        />
      </Card>
    </div>
  )
}

export default RegestrationForm
