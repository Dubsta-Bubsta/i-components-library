import React, {  } from 'react'
import Typography from '../Typography/Typography'
import { createUseStyles } from 'react-jss'

type PropsType = {
    selectors: Array<SelectorType>
    activeSelectorId: number | string
    setActiveSelector: (selectorId: number | string) => void

    style?: any
    selectorStyle?: any
}

export type SelectorType = {
    id: number | string
    label: string
    borderColor?: string
}



const useStyles = createUseStyles({
    root: () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFFFFF',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
    }),

    selectorElement: {
        width: '100%',
        padding: '16px 10px 17px 10px',
        border: 'none',
        transition: '0s',
        boxSizing: 'border-box',
        "& .selector-border": {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 4,
            display: 'none',
        },

        "&.active": {
            position: 'relative',
            "& .selector-border": {
                display: 'block'
            }
        }
 
    }
    
})

const Selectors = ({ selectors, activeSelectorId, setActiveSelector, style = {}, selectorStyle = {} }: PropsType) => {
    const styles = useStyles()

    return (
        <div className={styles.root} style={style}>
            {selectors.map(selector => (
                <button
                    key={selector.id}
                    onClick={() => setActiveSelector(selector.id)}
                    className={`${styles.selectorElement} ${activeSelectorId === selector.id ? "active" : ""}`}
                    data-color={selector.borderColor}
                    data-id={`selector-${selector.id}`}
                    style={selectorStyle}
                >
                    <Typography
                        variant="p"
                        fontFamily="Muller"
                        fontSize={14}
                        bold={activeSelectorId === selector.id}
                        theme={activeSelectorId === selector.id ? "black" : "gray"}
                    >
                        {selector.label}
                    </Typography>
                    <div className="selector-border" style={{ backgroundColor: selector.borderColor }}></div>
                </button>
            ))}
        </div>
    )
}

export default Selectors;