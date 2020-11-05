import React, { FC } from 'react'
import './Typography.scss'

type PropsType = {
	className?: string
	variant?: "p" | "sp1" | "sp2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle" | "body" | "small" | "additional",
	color?: ""
	theme?: "black" | "gray" | "white"
	bold?: boolean
	fontSize?: number
	lineHeight?: number
	fontFamily?: string
	margin?: number | string
	padding?: number | string
}

const Typography: FC<PropsType> = ({ variant = "p", className = "", theme = "black", bold = false, fontSize = 14, lineHeight, color, fontFamily = "Muller", padding, margin, ...props }) => {
	let Component = "p" as any
	if (variant === "subtitle" || variant === "body" || variant === "small" || variant === "additional" || variant === "sp1" || variant === "sp2") {
		Component = "p"
	} else {
		Component = variant
	}

	return (
		<Component			
			className={`${className} typography typography-${variant} ${theme} ${bold ? "bold" : ""}`}

			style={{
				fontSize,
				color,
				fontFamily,
				padding,
				margin,
				lineHeight: `${lineHeight}px`
			}}
		>
			{props.children}
		</Component>
	)
}

export default Typography;