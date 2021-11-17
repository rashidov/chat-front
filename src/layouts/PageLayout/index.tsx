import React from 'react'
import './style.scss'

const PageLayout: React.FC = ({children}) => {
  return (
    <div className='page-layout'>
      {children}
    </div>
  )
}

export default PageLayout
