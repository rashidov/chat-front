import React from 'react'

interface SelectProps {
  value: string
	onChange: () => void
}

export const Select: React.FC = () => {
	return (
		<div>
			<span className='icon-arrowBttom'></span>
		</div>
	)
}
