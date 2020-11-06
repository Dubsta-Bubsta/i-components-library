import React, { FC, useState, useEffect, useRef } from 'react';
import { TooltipBulb, TooltipWarning, TooltipTriangle } from './assets/svg'
import Typography from '../Typography';
import { createUseStyles } from 'react-jss'

type PropsType = {
    iconType?: "success" | "error"
    color?: string
    themeColor?: string
    title?: string
    description?: string
}

const useStyles = createUseStyles({
    root: (props) => ({
        maxWidth: 300,
        borderRadius: 5,
        position: 'relative', 
        padding: '14px 20px 12px 20px',
        background: props.themeColor,
        boxShadow:  `2px 2px 5px ${props.themeColor}`
    }),
    tooltipTriangle: (props) => ({
        position: 'absolute',
        left: 0,
        top: -15,
        "& svg path": {
            fill: props.themeColor
        }
    }),
    content: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    logo: {
        marginRight: 18,
    },
    info: {
        marginBottom: 5
    }
})

const Tooltip: FC<PropsType> = ({ title, description, iconType = "", color = "#fff", themeColor = "#C4C4C4" }) => {
    const styles = useStyles({ themeColor })

    let Icon = TooltipBulb
    if (iconType === "error") {
        Icon = TooltipWarning
    }

    return (
        <div className={styles.root}>
            <div className={styles.tooltipTriangle}>
                <TooltipTriangle />
            </div>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Icon />
                </div>
                <div className={styles.info}>
                    <Typography variant="p" bold={true} fontSize={14} color={color}>{title}</Typography>
                    <Typography variant="small" color={color}>{description}</Typography>
                </div>
            </div>
        </div>
    )
}

export default Tooltip;