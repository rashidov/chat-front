import React from 'react'
import clsx from 'clsx'
import './style.scss'

interface InputProps {
	type?: string | 'text'
	value: string
	name?: string
	placeholder?: string
	className?: string | undefined
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({type, value, name, placeholder, className, onChange}) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={clsx('input', className)}
		/>
	)
}
