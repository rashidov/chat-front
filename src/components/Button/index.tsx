import React from 'react'
import clsx from 'clsx'
import './style.scss'

interface ButtonProps {
	text: string
	color?:
		| 'blue'
	className?: string
	onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({text, color, className, onClick}) => {
	return (
		<button
			onClick={onClick}
			className={clsx('button', className, color ? color : 'defaultColor' )}
		>
			{text}
		</button>
	)
}
