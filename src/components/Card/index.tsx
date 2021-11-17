import clsx from 'clsx'
import React from 'react'
import './style.scss'

interface CardProps {
  customStyle?: any
}

const Card: React.FC<CardProps> = ({customStyle, children}) => {
  return (
    <div 
      className={clsx('card', !customStyle && 'default')} 
      style={customStyle && customStyle}
    >
      {children}
    </div>
  )
}

export default Card
