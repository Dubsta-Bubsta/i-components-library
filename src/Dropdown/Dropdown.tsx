import React, { useState, useEffect, useRef, FC } from 'react'
import classNames from 'classnames'
import './Dropdown.scss'
import { DropdownArrow, CheckIcon, CloseIcon } from './assets/svg'

import Typography from '../Typography/Typography'
import Flex from '../Flex'

type SelectorType = {
    id: number | string
    value: string
    disabled?: boolean
}

type PropsType = {
    data: Array<SelectorType>
    selectedID?: number | string
    handleChange?: (value?: any) => void 

    withReset?: boolean
    initialOpen?: boolean

}

// Getting active element by ID - simple filter
const getActiveSelector = (id: number | string, data: Array<SelectorType>) => {
    let activeSelector = ''
    if (data.length) {
        let filteredSelectors = data.filter(selector => selector.id.toString() === id.toString())
        if (filteredSelectors.length) {
            activeSelector = filteredSelectors[0].value
        }
    }
    
    return activeSelector
}


const Dropdown: FC<PropsType> = (props) => {
    const { data, selectedID = '', handleChange = () => {}, initialOpen = false, withReset = true } = props

    const [open, setOpen] = useState(initialOpen)

    // Changing value and closing dropdown
    const changeHandler = (id: number | string) => {
        handleChange(id)
        setOpen(false)
    }

    const getIsActive = (id: number | string) => {
        return  selectedID.toString() === id.toString()
    }


    const resetDropdownRef = useRef(null) 
    const dropdownRef = useRef(null) 
    // If clicking outside dropdown - toggle off
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

    const activeSelectorValue = getActiveSelector(selectedID, data)

	return (
        <div className="custom-dropdown" ref={dropdownRef}>

            <Flex
                className="dropdown__active-element"
                onClick={() =>  setOpen(!open) }
            >
                <Typography className="active-element__value" variant="p" theme={activeSelectorValue ? "black" : "gray"}>
                    {activeSelectorValue ?? "Выбор"}
                </Typography>
                                
                <Flex className="active-element__buttons" >
                    {(withReset && selectedID) &&
                        <button
                            ref={resetDropdownRef}
                            className="buttons__icon"
                            onClick={() => { changeHandler(''); }}
                        >
                        <CloseIcon />
                    </button>}
                    <button className={`buttons__icon ${open ? "rotate" : ""}`}>
                        <DropdownArrow />
                    </button>
                </Flex>
            </Flex>
           

            { open && <div className="dropdown__list list">
                {data.map(selector => (
                    <Flex
                        key={selector.id}
                        className={classNames("selector list__element", {
                            'active': getIsActive(selector.id),
                            'disabled': selector.disabled
                        })}
                        onClick={() => { changeHandler(selector.id) }}
                    >
                        <Typography variant="p">{selector.value}</Typography>
                        { getIsActive(selector.id) && <CheckIcon /> }
                    </Flex>
                ))}
            </div>}

        </div>
	)
}



export default Dropdown;