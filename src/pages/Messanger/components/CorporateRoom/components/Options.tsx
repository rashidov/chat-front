import React from 'react'
import { Button } from '../../../../../components/Button'
import DropDownCard from '../../../../../components/DropDownCard'
import LinkCard from '../../../../../components/LinkCard'

const Options: React.FC = () => {
  return (
    <div className='options'>
      <DropDownCard 
        icon='list'
        title='Фразы'
        isFooter={true}
        footerContent={<Button text="добавить фразу" color='blue' icon='listAdd' />}
        payload={{
          type: 'array-string',
          value: ['отгрузите', 'проверьте заказ №']
        }}
      />
      <LinkCard 
        url='/' 
        title='Помощь' 
        icon='question'
        customStyle={{marginTop: '12px'}}
      />
    </div>
  )
}

export default Options
