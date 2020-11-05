import React from 'react'
import './Table.scss'

type PropsType = {
	children: any
}


const Table = ({ ...props }: PropsType) => {
	return (
		<table className="custom-table">
			{props.children}
		</table>
	)
}
export default Table;