import React, { FC, useState, useEffect, useRef } from 'react';
import './Tooltip.scss';
import { TooltipTriangle } from './TooltipTriangle'

import { TooltipBulb, TooltipWarning } from './assets/svg'
import Typography from '../Typography';

type PropsType = {
    type?: "success" | "error" | "default"
    title?: string
    description?: string
}

const Tooltip: FC<PropsType> = ({ type = "default", title, description }) => {

    let Icon = TooltipBulb
    if (type === "error") {
        Icon = TooltipWarning
    }

	return (
        <div className={`custom-tooltip ${type}`}>
            <div className="tooltip__triangle">
                <TooltipTriangle />
            </div>
            <div className="tooltip__content">
                <div className="content__logo">
                    <Icon />
                </div>
                <div className="tooltip__info">
                    <Typography variant="p" theme="white" bold={true}>{title}</Typography>
                    <Typography variant="small" theme="white">{description}</Typography>
                </div>
            </div>
		</div>
	)
}

export default Tooltip;