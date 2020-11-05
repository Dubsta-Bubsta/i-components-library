import React, { useState } from 'react'
import classNames from 'classnames'
import './SearchInput.scss'
import { CloseIcon, SearchIcon } from './assets/svg'


type PropsType = {
	theme?: "white" | "gray"
	borderRadius?: "default" | "small"
	placeholder?: string
	collapsed?: boolean
	withReset?: boolean
}


const SearchInput = ({ theme="white", borderRadius="default", placeholder = "", collapsed = false, withReset = true }: PropsType) => {
	const [searchText, setSearchText] = useState('')

	return (
		<div className={classNames(`header__search-block ${theme} border-${borderRadius}`, {'collapsed': collapsed})}>
			
			<input 
				placeholder={placeholder}
				className="search-block__input" 
				value={searchText} 
				onChange={(e) => setSearchText(e.target.value)}
			/>
			

			{ withReset && <button className="search-block__icon close" onClick={() => { setSearchText("") }}>
				<CloseIcon />
			</button> }

			<button className="search-block__icon search">
				<SearchIcon />
			</button>

		</div>
	)
}

export default SearchInput;