import React, { FC, useState, useEffect, useRef } from 'react';
import './Popup.scss';
import classNames from 'classnames';


export enum MaxWidthEnum {
	ls = 'ls',
	md = 'md',
	sm = 'sm',
	xl = 'sl',
	xs = 'xs',
}


export type PropsType = {
	open: boolean
	setOpen: (open: boolean) => void
	maxWidth?: string
	fullWidth?: boolean
}

const Popup: FC<PropsType> = ({ open, setOpen, maxWidth = MaxWidthEnum.sm, fullWidth = false, ...props }) => {
	const [styleObject] = useState({})


	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		document.addEventListener('click', (e: any) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				e.stopPropagation()
			}
		})
		return () => { document.removeEventListener('click', () => { }) }
	}, [])


	return (
		<div className={`popup__block ${open ? "active" : ""}`}>
			<div className="popup__bg" onClick={() => { setOpen(false) }}></div>
			<div
				ref={modalRef}
				className={classNames(
					"popup__content", {
					[maxWidth]: maxWidth,
					"fullWidth": fullWidth
				}
				)}
				style={{ ...styleObject }}
			>
				{props.children}

			</div>
		</div>
	)
}

export default Popup;