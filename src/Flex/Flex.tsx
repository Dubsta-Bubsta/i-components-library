import React from 'react'
import styled, { css } from 'styled-components'



type FlexProps = {
	alignItems?: string
	justifyContent?: string
	alignContent?: string
	justifyItems?: string
	flexDirection?: string
}

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between; 
	${(props: FlexProps) => css`
		flex-direction: ${props.flexDirection ?? "row"} ;
		align-items: ${props.alignItems ?? "center"} ;
		justify-content: ${props.justifyContent ?? "space-between"} ;
		align-content: ${props.alignContent} ;
		justify-items: ${props.justifyItems} ;
	`}
`;

export default Flex;