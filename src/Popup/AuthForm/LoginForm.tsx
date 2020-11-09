import React from 'react'
import './AuthForm.scss'
import { FormTitle, AuthPhaseEnum } from './AuthForm'
import Button from '../../Button'
import AuthInput from './AuthInput/AuthInput'

import Checkbox from './Checkbox/Checkbox'

import { UserIcon, LockIcon, PhoneIcon, GoogleIcon, IEIcon, MozilaIcon, SafariIcon, HorizontalLogo, SSOLogo } from './assets/svg'


type PropsType = {
	setAuthPhase: (authPhase: AuthPhaseEnum) => void
}
const LoginForm = ({ setAuthPhase }: PropsType) => {
	return (
		<div className="body__content">

			<div className="content__form">
				<FormTitle title="Вход в систему" />

				<AuthInput Icon={UserIcon} placeholder="Имя пользователя" />
				<AuthInput Icon={LockIcon} placeholder="Пароль" />

				<div className="checkbox__block">
					<Checkbox label={"Поддерживать сессию?"} />
				</div>

				<div className="form__buttons">
					<Button variant="filled" className="buttons__login" theme="blue" padding={'15px 60px'} borderRadius={25}>ВОЙТИ</Button>
					<p className="form__service-link">Забыли пароль?</p>
				</div>
				<button className="form__service-link" onClick={() => { setAuthPhase(AuthPhaseEnum.register) }}>Регистрация</button>

			</div>
			<button className="sso-auth auth">
				<p className="auth__title">Вход через ССО</p>
				<div className="auth__logo">
					<SSOLogo />
				</div>
			</button>

			<div className="content__info">
				<div className="info__logo">
					<HorizontalLogo />
				</div>
				<div className="info__contact-us">
					<PhoneIcon />
					<p className="contact-us__text">Связаться с командой поддержки</p>
				</div>
				<div className="info__socials">
					<div className="social__item">
						<GoogleIcon />
					</div>
					<div className="social__item">
						<IEIcon />
					</div>
					<div className="social__item">
						<MozilaIcon />
					</div>
					<div className="social__item">
						<SafariIcon />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginForm;