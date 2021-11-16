import React from 'react'
import clsx from 'clsx'
import './style.scss'

interface SelectProps {
  value: string
	options: string[]
	isActiveIcon?: boolean | false
	placeholder?: string
	onChange: (str: string) => void
}

export const Select: React.FC<SelectProps> = ({value, options, isActiveIcon, placeholder, onChange}) => {
	const [isActive, setActive] = React.useState(false)

	const handlerIsActive = () => {
		setActive(prev => !prev)
	}

	const handlerSetActiveValue = (value: string) => {
		onChange(value)
		setActive(false)
	}

// 	<Select
// 		value={value}
// 		options={values}  // массив строк
// 		isActiveIcon={true}
// 		placeholder='Должность'  // будет показываться если value пустая строка
// 		onChange={(str) => setValue(str)}
// 	/>

	return (
		<>
			<div className={clsx('select', isActive && 'active')} onClick={handlerIsActive}>
				<span className='select-text'>{placeholder ? value.length > 0 ? value : placeholder : value}</span>
				<span className={clsx('select-icon', `icon-${isActive ? 'expandLess' : 'expandMore'}`)}></span>
			</div>
			{isActive && 
				<div className='select-content'>
					{options.map(item => (
						<div key={item} className='select-content__item' onClick={() => handlerSetActiveValue(item)}>
							<span className='select-content__item-text'>{item}</span> 
							{isActiveIcon && value === item && <span className='icon-done'></span>}
						</div>
					))}
				</div>
			}
		</>
	)
}
