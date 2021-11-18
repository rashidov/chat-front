import React from 'react'
import clsx from 'clsx'
import './style.scss'

interface ButtonProps {
	text?: string
	color?:
		| 'blue'
	icon?: 
		| 'send'
	className?: string
	onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({text, color, className, icon, onClick}) => {
	return (
		<button
			onClick={onClick}
			className={clsx('button', className, color ? color : 'defaultColor' )}
		>
			{text && text}
			<span className={clsx(icon && `icon-${icon}`)}></span>
		</button>
	)
}
