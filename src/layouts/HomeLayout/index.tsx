import React from 'react'
import './style.scss'

const HomeLayout: React.FC = ({children}) => {
  return (
    <div className='home-layout'>
      {children}
    </div>
  )
}

export default HomeLayout
