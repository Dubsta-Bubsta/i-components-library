import React from 'react'
import './AuthForm.scss'
import { FormTitle, AuthPhaseEnum } from './AuthForm'
import Button from '../../Button'
import AuthInput from './AuthInput/AuthInput'

import lockIcon from './assets/lock-icon.svg'
import Checkbox from './Checkbox/Checkbox'

import googleIcon from './assets/google-icon.svg'
import ieIcon from './assets/ie-icon.svg'
import mozilaIcon from './assets/mozila-icon.svg'
import safariIcon from './assets/safari-icon.svg'
import horizontalLogo from './assets/logo-horizontal-blue.svg'

import phoneIcon from './assets/phone-icon.svg'
import userIcon from './assets/user-icon.svg'


type PropsType = {
	setAuthPhase: (authPhase: AuthPhaseEnum) => void
}
const LoginForm = ({ setAuthPhase }: PropsType) => {
	return (
		<div className="body__content">

			<div className="content__form">
				<FormTitle title="Вход в систему" />

				<AuthInput icon={userIcon} placeholder="Имя пользователя" />
				<AuthInput icon={lockIcon} placeholder="Пароль" />

				<div className="checkbox__block">
					<Checkbox label={"Поддерживать сессию?"} />
				</div>

				<div className="form__buttons">
					<Button variant="filled" theme="blue" padding={'15px 60px'} borderRadius={25}>ВОЙТИ</Button>
					<p className="form__service-link">Забыли пароль?</p>
				</div>
				<button className="form__service-link" onClick={() => { setAuthPhase(AuthPhaseEnum.register) }}>Регистрация</button>

			</div>

			<div className="content__info">
				<img src={horizontalLogo} alt="itmo-horizontal-logo" />
				<div className="info__contact-us">
					<img src={phoneIcon} alt="phone-icon" />
					<p className="contact-us__text">Связаться с командой поддержки</p>
				</div>
				<div className="info__socials">
					<img src={googleIcon} className="social__item" alt="social-item" />
					<img src={ieIcon} className="social__item" alt="social-item" />
					<img src={mozilaIcon} className="social__item" alt="social-item" />
					<img src={safariIcon} className="social__item" alt="social-item" />
				</div>
			</div>
		</div>
	)
}

export default LoginForm;