import React from 'react'
import './AuthForm.scss'
import { FormTitle, AuthPhaseEnum } from './AuthForm'
import Button from '../../Button'
import AuthInput from './AuthInput/AuthInput'

import { UserIcon, EmailIcon, LockIcon } from './assets/svg'

type PropsType = {
	setAuthPhase: (authPhase: AuthPhaseEnum) => void
}



const RegisterForm = ({ setAuthPhase }: PropsType) => {
	return (
		<div className="body__content">
			<div className="content__form">
				<FormTitle title="Регистрация" />

				<AuthInput Icon={UserIcon} placeholder="Имя пользователя" />
				<AuthInput Icon={EmailIcon} placeholder="Электронная почта" />
				<AuthInput Icon={LockIcon} placeholder="Пароль" />
				<AuthInput Icon={LockIcon} placeholder="Повторите пароль" />


				<div className="form__buttons">
					<Button variant="filled" className="buttons__login" theme="blue" padding={'15px 60px'} borderRadius={25}>Зарегистрироваться</Button>
				</div>
				<button className="form__service-link" onClick={() => { setAuthPhase(AuthPhaseEnum.login) }}>Войти</button>

			</div>
		</div>
	)
}

export default RegisterForm;