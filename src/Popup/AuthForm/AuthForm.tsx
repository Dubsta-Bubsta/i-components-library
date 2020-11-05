import React, { useState } from 'react'
import './AuthForm.scss'
import defaultLogo from './assets/logo-vertical-white.svg'


import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Popup, { MaxWidthEnum } from '../Popup'


type PropsType = {
	open: boolean
	setOpen: (open: boolean) => void
}

export enum AuthPhaseEnum {
	login,
	register
}

const AuthForm = ({ open, setOpen }: PropsType) => {
	const [authPhase, setAuthPhase] = useState(AuthPhaseEnum.login)

	let renderComponent
	if (authPhase === AuthPhaseEnum.login) {
		renderComponent = <LoginForm setAuthPhase={setAuthPhase} />
	} else if (authPhase === AuthPhaseEnum.register) {
		renderComponent = <RegisterForm setAuthPhase={setAuthPhase} />
	}


	return (
		<Popup open={open} setOpen={setOpen} maxWidth={MaxWidthEnum.md}>
			<div className="modal__body">
				<div className="body__preview">
					<img src={defaultLogo} alt="itmo-logo" />
				</div>
				{renderComponent}
			</div>
		</Popup>
	)
}

export const FormTitle = ({ title = "" }) => (
	<div className="form__title">
		<div className="title__line"></div>
		<p className="title__text">{title}</p>
		<div className="title__line"></div>
	</div>
)

export default AuthForm;