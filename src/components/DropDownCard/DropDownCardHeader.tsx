import React from 'react'
import clsx from 'clsx'

interface DropDownCardHeaderProps {
  handlerIsActive: () => void
  isActive: boolean
  title: string
  icon: string
}

const DropDownCardHeader: React.FC<DropDownCardHeaderProps> = ({isActive, title, icon, handlerIsActive}) => {
  return (
    <div 
      className={clsx("dropDownCard-header", isActive && 'active')}
      onClick={handlerIsActive}
    >
      <div className="dropDownCard-header__left">
        <span className={`icon-${icon} icon`}></span>
        <span className='title'>{title}</span>
      </div>
      <div className="dropDownCard-header__right">
        <span className={`icon-${isActive ? 'expandLess' : 'expandMore'}`}></span>
      </div>
    </div>
  )
}

export default DropDownCardHeader
