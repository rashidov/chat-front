import React from 'react'
import { Payload } from '.'

const DropDownCardContent: React.FC<Payload> = ({value, type}) => {
  return (
    <div className="dropDownCard-content">
      {type === 'array-string' && <DropDownCardContentTypeArrayString data={value} />}
    </div>
  )
}

export default DropDownCardContent


const DropDownCardContentTypeArrayString: React.FC<{data: any[]}> = ({data}) => {
  return (
    <div className="dropDownCard-content__arrString">
      {data.map(item => (
        <div key={item} className="dropDownCard-content__arrString-item">
          {item}
        </div>
      ))}
    </div>
  )
}