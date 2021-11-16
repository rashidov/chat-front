import React from 'react'
import clsx from 'clsx'
import './style.scss'

interface InputProps {
	type?: string | 'text'
	value: string
	className?: string | undefined
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({type, value, className, onChange}) => {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			className={clsx('input', className)}
		/>
	)
}
