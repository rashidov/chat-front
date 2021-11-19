import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

interface LinkCardProps {
  customStyle?: any
  title: string
  url: string
  icon?: 
    | 'question'
}

const LinkCard: React.FC<LinkCardProps> = ({url, title, icon, customStyle}) => {
  return (
    <div className='linkCard' style={customStyle && customStyle}>
      <div className="linkCard-container">
        {icon && <span className={`icon-${icon} icon`}></span>}
        <Link to={url} >{title}</Link>
      </div>
      <span className='icon-reply ricon'></span>
    </div>
  )
}

export default LinkCard
