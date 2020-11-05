import React from 'react'
import './TableRow.scss'


type PropsType = {
	children: any	
}

const TableRow = ({ ...props }: PropsType) => {
	return (
		<tr className="custom-table-row">
			{props.children}
		</tr>
	)
}

export default TableRow;