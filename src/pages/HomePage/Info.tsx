import React from 'react'
import './style.scss'

const Info: React.FC = () => {
  return (
    <div className="home-info">
      <div className="home-info__title">
        Tatspirtprom Team
      </div>
      <div className="home-info__content">
        <div className="home-info__content-main">
          Предназначен для облегчения обмена информации
          <br />
          между сотрудниками.   
        </div>
        <div className="home-info__content-warning">
          <span>сервис работает в тестовом режиме</span>
          {/* <span>
            на момент разработки 
            <br />
            при регистрации достаточно указать:
          </span>

          <ul>
            <li>имя</li>
            <li>фамилия</li>
            <li>должность</li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default Info
