import React from 'react'
import Info from './Info'
import RegestrationForm from './RegestrationForm'
import './style.scss'

const HomePage: React.FC = () => {
  return (
    <div className='home'>
      <Info />
      <RegestrationForm />
    </div>
  )
}

export default HomePage
