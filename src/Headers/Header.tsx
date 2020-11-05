import React, { useState } from 'react'
import './Header.scss'
import defaultLogo from './assets/logo-horizontal-blue.svg'
import libraryLogo from './assets/itmo-library-logo.svg'
import SearchInput from '../SearchInput'
import Button from '../Button'
import Select from '../Select'
import { AuthPopup } from '../Popup/index'

export const DefaultHeader = ({  }) => {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<div className="header__holder">
			<header className="header__content white">
				<img src={defaultLogo} alt="itmo-logo" className="header__logo"/>

				<SearchInput theme="gray" borderRadius="small" placeholder="Поиск по сайту"/>

				<Select 
					theme="blue"
					selectors={[
						{ id: 'ru', label: 'RU' }, 
						{ id: 'en', label: 'EN' }, 
					]}
				/>

				<Button onClick={() => { setModalOpen(true) }} theme="blue" variant="outlined" margin={'0 0 0 12.5px'}>Войти</Button>
			</header>
			<AuthPopup open={modalOpen} setOpen={setModalOpen} />

		</div>
	)
}

export const CustomHeader = ({ }) => {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<div className="header__holder">
			<header className="header__content blue">
				<img className="header__logo" src={libraryLogo} alt="itmo-logo"/>

				<SearchInput theme="gray" borderRadius="default" placeholder="Поиск по сайту" collapsed={true}/>
				<Button theme="white" variant="outlined" margin={'0 12.5px 0 0'}>Расширенный поиск</Button>
            	<Button theme="white" variant="outlined" margin={'0 12.5px'}>Атрибутный поиск</Button>
				<Select 
					theme="white"
					selectors={[
						{ id: 'ru', label: 'RU' }, 
						{ id: 'en', label: 'EN' }, 
					]}
				/>

				<Button onClick={() => { setModalOpen(true) }} theme="white" variant="outlined" margin={'0 0 0 12.5px'}>Войти</Button>
			<AuthPopup open={modalOpen} setOpen={setModalOpen} />
				
			</header>
		</div>
	)
}