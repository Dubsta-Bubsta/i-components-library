import React, { useState, useEffect, useRef, Children, FC } from 'react'
import classNames from 'classnames'
import './Input.scss'

import { SuccessStatusIcon, ErrorStatusIcon } from './assets/svg'

type PropsType = {
    isSuccess?: boolean
    isError?: boolean
    statusIconVisible?: boolean

    beforeIcon?: React.ReactNode
    afterIcon?: React.ReactNode

    filled?: boolean

    inputProps?: any

    helperText?: string
    helperTextPosition?: "left" | "center" | "right"
}

const Input: FC<PropsType> = (props) => {
	const { isSuccess, isError, filled, statusIconVisible = true, beforeIcon, afterIcon, inputProps } = props
	const { helperText = "", helperTextPosition = "left", ...restProps } = props


    let StatusIcon 
    if (isSuccess) {
        StatusIcon = SuccessStatusIcon
    } else {
        StatusIcon = ErrorStatusIcon
    }
    

	return (
        <div className={classNames("custom-input-block", {
            "success": isSuccess,
            "error": isError,
            "filled": filled
        })}>
            <div className="input-block__content">
                <div className="input-block__icon icon_before">
                    {beforeIcon}
                </div>

                <input {...inputProps} {...restProps} className="input-block__input" />
                
                <div className="input-block__icon icon_after">
                    {afterIcon}
                </div>
                {statusIconVisible && <div className="input-block__icon icon_after">
                    <StatusIcon />
                </div>}
            </div>
            {helperText && <p className={`input-block__helperText position-${helperTextPosition}`}>{helperText}</p>}
        </div>
	)
}

export default Input;