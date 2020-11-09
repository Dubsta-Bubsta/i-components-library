import React from 'react'
import './AuthInput.scss'

type PropsType = {
	Icon?: any
	placeholder?: string
}

const AuthInput = ({ Icon, placeholder }: PropsType) => {
	return (
		<div className="input-block">
			<div className="input-block__icon">

				<Icon />
			</div>
			<input className="input-block__input" placeholder={placeholder}/>
		</div>
					
	)
}
export default AuthInput;