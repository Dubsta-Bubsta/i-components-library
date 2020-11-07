import React, { useState } from 'react'
import classNames from 'classnames'
import { CloseIcon, SearchIcon } from './assets/svg'
import { createUseStyles } from 'react-jss'
import { colors, fonts } from '../styles/common.js'

type PropsType = {
	theme?: "white" | "gray"
	borderRadius?: "default" | "small"
	placeholder?: string
	collapsed?: boolean
	withReset?: boolean

	searchText: string
	setSearchText: (searchText: string) => void
}

const useStyles = createUseStyles({
    root: {
		flex: 1,
		margin: '0 25px',
		display: 'flex',
		alignItems: 'center',
		height: 40,	
		"&.collapsed": {
			width: '70%'
		},
		"&.white": {
			background: colors.white,
			"& .input": {
				color: colors.defaultBlack,
			}
		},
		"&.gray": {
			background: colors.lightGray,
			"& .input": {
				color: colors.darkGray,
			}
		},
		"&.border-default": {
			borderRadius: '4px'
		},
		"&.border-small": {
			borderRadius: '2px'
		},
	},
	input: {
		fontFamily: fonts.openSans,
		border: 'none',
		width: '100%',
		padding: '11px 29px 10px 20px',
		background: 'transparent',
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0 15px',
		height: 40,
		
		"&.search": {
			borderLeft: `1px solid ${colors.defaultGray}`,
		}
	}

    
})


const SearchInput = ({ searchText, setSearchText, theme="white", borderRadius="default", placeholder = "", collapsed = false, withReset = true }: PropsType) => {
    const styles = useStyles()

	return (
		<div className={classNames(`${styles.root} ${theme} border-${borderRadius}`, {'collapsed': collapsed})}>
			
			<input 
				placeholder={placeholder}
				className={`${styles.input} input`} 
				value={searchText} 
				onChange={(e) => setSearchText(e.target.value)}
			/>
			

			{ withReset && <button className={`${styles.icon} icon close`} onClick={() => { setSearchText("") }}>
				<CloseIcon />
			</button> }

			<button className={`${styles.icon} icon search`}>
				<SearchIcon />
			</button>

		</div>
	)
}

export default SearchInput;