import React from 'react'
import Typography from '../Typography'
import styled from 'styled-components'


type PropsType = {
	children: React.ReactNode	
	variant?: "body" | "head" 
}


const defaultStyle = `
	display: table-cell;
    padding: 16px;
    font-size: 0.875rem;
    text-align: left;
    border-bottom: 1px solid #C4C4C4;
	vertical-align: inherit;
`;

const StyledTD = styled.td`
	${defaultStyle}
	& .cell__content {
		display: block;
	}
`;

const StyledTH = styled.th`
	${defaultStyle}
`;


const TableCell = ({ variant = "body", ...props }: PropsType) => {
	if (variant === "head") {
		return (
			<StyledTH>
				<Typography bold={true} fontSize={14} fontFamily={"Muller"}>
					{props.children}
				</Typography>
			</StyledTH>
		)
	} else {
		return (
			<StyledTD>
				<Typography className="cell__content" fontSize={12} fontFamily={"Muller"} theme="black">
					{props.children}
				</Typography>
			</StyledTD>
		)
	}
}
export default TableCell;