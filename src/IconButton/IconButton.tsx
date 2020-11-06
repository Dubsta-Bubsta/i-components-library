import React from 'react'
import styled, { css } from 'styled-components'

type PropsType = {
	children: React.ReactNode,
	themeColor?: string
	size?: "default" | "small"
	color?: string
}

const getSize = (size?: "default" | "small") => {
	let sizeNumber = 33
	if (size === "small") {
		sizeNumber = 25
	}  

	return sizeNumber
}

const IconButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	border: none;
	${(props: PropsType) => css`
		background: ${props.themeColor};
		borderColor: ${props.themeColor};

		width: ${getSize(props.size)}px;
		height: ${getSize(props.size)}px;
		color: ${props.color ? props.color : "#fff"};
	`}
`;

export default IconButton;