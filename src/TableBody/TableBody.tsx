import React from 'react'
import './TableBody.scss'

type PropsType = {
	children: any	
}

const TableBody = ({ ...props }: PropsType) => {
	return (
		<tbody className="custom-table-body">
			{props.children}
		</tbody>
	)
}
export default TableBody;