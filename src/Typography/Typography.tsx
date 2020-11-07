import React, { FC } from 'react'
import styled from 'styled-components'
import { fonts, colors } from '../common'


type PropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	className?: string
	variant?: "p" | "sp1" | "sp2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle" | "body" | "small" | "additional",
	color?: string
	theme?: "black" | "gray" | "white"
	bold?: boolean
	fontSize?: number
	lineHeight?: number
	fontFamily?: string
	margin?: number | string
	padding?: number | string
}

const Typography: FC<PropsType> = ({ variant = "p", className = "", theme = "black", bold = false, fontSize, lineHeight, color, fontFamily = "Muller", padding, margin, ...props }) => {
	let Component = "p" as any
	if (variant === "subtitle" || variant === "body" || variant === "small" || variant === "additional" || variant === "sp1" || variant === "sp2") {
		Component = "p"
	} else {
		Component = variant
	}

	const StyledTypography = styled(Component)`
		font-style: normal;
		font-weight: normal;
		color: ${colors.defaultBlack};
		font-family: ${fonts.muller};
		line-height: 136.5%;
		margin: 0;

		&.typography {
			&-sp1 {
				font-size: 32px;
			}
			&-sp2 {
				font-size: 28px;
			}
		
			&-p {
				font-size: 14px;
				line-height: 16px;
			}
			&-h1 {
				font-size: 24px;
			}
			&-h2 {
				font-size: 22px;
			}
			&-h3 {
				font-size: 20px;
			}
			&-h4 {
				font-size: 18px;
			}
			&-h5 {
				font-size: 16px;
			}
			&-h6 {
				font-size: 14px;
			}
			&-subtitle {
				font-size: 18px;
			}
			&-body {
				font-size: 14px;
			}
			&-small {
				font-size: 12px;
			}
			&-additional {
				font-size: 11px;
			}
		}
		
	
		&.black {
			color: ${colors.defaultBlack};
		}
		&.gray {
			color: ${colors.defaultGray};
		}
		&.white {
			color: ${colors.white};
		}
	
		&.bold {
			font-weight: 500;
		}
	`;

	return (
		<StyledTypography			
			className={`${className} typography-${variant} ${theme} ${bold ? "bold" : ""}`}

			style={{
				fontSize,
				color,
				fontFamily,
				padding,
				margin,
				lineHeight: `${lineHeight}px`
			}}
			{...props}
		>
			{props.children}
		</StyledTypography>
	)
}

export default Typography;