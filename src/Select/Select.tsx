import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import './Select.scss'
import { DropdownArrow } from './assets/svg'

type PropsType = {
	theme?: "blue" | "white"
	selectors: Array<SelectorType>
}

export type SelectorType = {
	id: number | string
	label: string
}


const Select = ({ theme = "white", selectors = [] }: PropsType) => {
	
	const [activeSelector, setActiveSelector] = useState({} as SelectorType)

	useEffect(() => {
		if (selectors.length)
			setActiveSelector(selectors[0])
	}, [selectors])


	const [open, setOpen] = useState(false)
	const dropdownRef = useRef(null) 

	useEffect(() => {
		const checkTarget = (e: any) => {
			if (dropdownRef.current && !(dropdownRef as any).current.contains(e.target)) {
				setOpen(false)
				e.stopPropagation()
			}
		}

		document.addEventListener('touchstart', checkTarget)
		document.addEventListener('click', checkTarget)

		return () => { document.removeEventListener('click', () => { }) }
	}, [])

	return (
		<div className={`selector-block ${theme}`} ref={dropdownRef}>
			<div className="selector__active" onClick={() => setOpen(!open)}>
				<p>{activeSelector.label}</p>
				<DropdownArrow />
			</div>
			<div className={`selector__list ${open ? "active" : ""}`}>
				{selectors.map(selector => (
					<div className={classNames("list__element", { "active": selector.id === activeSelector.id })} key={selector.id} onClick={ () => { setActiveSelector(selector); setOpen(!open) }}>
						{selector.label}
					</div>
				))}
			</div>
		</div>
	)
}

export default Select;