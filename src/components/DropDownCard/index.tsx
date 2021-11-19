import React from 'react'
import DropDownCardHeader from './DropDownCardHeader'
import DropDownCardContent from './DropDownCardContent'
import DropDownCardFooter from './DropDownCardFooter'
import './style.scss'

export interface Payload {
  value: any[]
  type: 
    | 'array-string'
}

interface DropDownCardProps {
  icon: string
  title: string
  isFooter?: boolean
  footerContent?: JSX.Element
  payload: Payload
}

const DropDownCard: React.FC<DropDownCardProps> = ({icon, title, payload, isFooter = false, footerContent}) => {
  const [isActive, setIsActive] = React.useState<boolean>(false)

  const handlerIsActive = () => {
    setIsActive(prev => !prev)
  }

  return (
    <div className='dropDownCard'>
      <DropDownCardHeader
        isActive={isActive}
        title={title}
        icon={icon}
        handlerIsActive={handlerIsActive}
      />
      {isActive && 
        <DropDownCardContent 
          type={payload.type} 
          value={payload.value} 
        />
      }
      {isActive && isFooter && 
        <DropDownCardFooter>
          {footerContent}
        </DropDownCardFooter>
      }
    </div>
  )
}

export default DropDownCard
