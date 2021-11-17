import React from 'react'
import Card from '../../components/Card'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import './style.scss'

const RegestrationForm: React.FC = () => {

  const selectOptions = ['оператор WMS', 'бухгалтер']

  return (
    <div className="home-regForm">
      <Card
        customStyle={{padding: '10% 0'}}
      > 
          <Input value='' placeholder='имя' onChange={() => console.log('asdasd')} />
          <Input value='' placeholder='фамилия' onChange={() => console.log('asdasd')} />
          <Select value='' placeholder='должность' options={selectOptions} onChange={(str) => console.log('== select value ==', str)} />
          <Button text='создать аккаунт' color='blue' onClick={() => console.log('== click button create account ==')} />
      </Card>
    </div>
  )
}

export default RegestrationForm
