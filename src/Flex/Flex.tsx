import React, { FC } from 'react'
import './Flex.scss'

type PropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	jusifyContent?: "sb" | "sa" | "center" | "stretch" | "start" | "end"
	alignItems?: "center" | "stretch" | "start" | "end"
	flexDirection?: "row" | "row-rev" | "column" | "column-rev"
}



const Flex: FC<PropsType> = ({ className = "", jusifyContent = 'sb', flexDirection = 'row', alignItems = 'center', ...props }) => (
	<div
		className={`
		${className} 
			custom-flex 
			justify-content-${jusifyContent} 
			align-items-${alignItems} 
			flex-direction-${flexDirection}
		`}
		{...props}
	>
		{props.children}
	</div>
)
export default Flex;