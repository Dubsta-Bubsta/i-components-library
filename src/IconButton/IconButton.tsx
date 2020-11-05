import React from 'react'
import './IconButton.scss'

type PropsType = {
	children: any,
	onClick?: () => void
	themeColor?: string
	size?: "default" | "small"
}




const IconButton = ({ children, onClick = () => {}, themeColor = "", size = "default" }: PropsType) => {
	return (
		<button 
			onClick={onClick}
			className={`icon-button size-${size}`}
			style={{ 
				color: "#fff",
				backgroundColor: themeColor,
				borderColor: themeColor,
			}}
		>
			{children}
		</button>
	)
}
export default IconButton;