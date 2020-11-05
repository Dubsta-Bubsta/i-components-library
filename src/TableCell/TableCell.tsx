import React from 'react'
import Typography from '../Typography'
import './TableCell.scss'

type PropsType = {
	children: React.ReactNode	
	variant?: "body" | "head" 
}


const TableCell = ({ variant = "body", ...props }: PropsType) => {
	if (variant === "head") {
		return (
			<td className={`custom-table-cell cell-head`}>
				<Typography bold={true} fontSize={14} fontFamily={"Muller"}>
					{props.children}
				</Typography>
			</td>
		)
	} else {
		return (
			<td className={`custom-table-cell cell-body`}>
				<Typography className="cell__content" fontSize={12} fontFamily={"Muller"} theme="black">
					{props.children}
				</Typography>
			</td>
		)
	}
}
export default TableCell;