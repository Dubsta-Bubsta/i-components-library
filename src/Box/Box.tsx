import React from 'react'
import './Box.scss'
type PropsType = {
    children: any
    className?: string
    padding?: number | string
}

const Box = ({ children, className, padding }: PropsType) => {
    return (
        <div className={`box ${className}`} style={{ padding }}>
            {children}
        </div>
    )
}
export default Box;