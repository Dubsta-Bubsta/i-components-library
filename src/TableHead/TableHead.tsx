import React from 'react'
import './TableHead.scss'

type PropsType = {
	children: any	
}

const TableHead = ({ ...props }: PropsType) => {
	return (
		<thead className="custom-table-head">
			{props.children}
		</thead>
	)
}
export default TableHead;