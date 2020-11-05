import React from 'react'
import './AuthInput.scss'

type PropsType = {
	icon?: string
	placeholder?: string
}

const AuthInput = ({ icon, placeholder }: PropsType) => {
	return (
		<div className="input-block">
			<div className="input-block__icon">
				<img src={icon} alt="input-icon"/>
			</div>
			<input className="input-block__input" placeholder={placeholder}/>
		</div>
					
	)
}
export default AuthInput;