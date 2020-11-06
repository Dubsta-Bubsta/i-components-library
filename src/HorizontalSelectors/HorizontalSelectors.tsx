import React, {  } from 'react'
import Typography from '../Typography/Typography'
import { createUseStyles } from 'react-jss'

type PropsType = {
    selectors: Array<SelectorType>
    activeSelector: SelectorType
    setActiveSelector: (selector: SelectorType) => void
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
        padding: '16px 10px 15px 10px',
        border: 'none',
        transition: '0s',
        boxSizing: 'border-box',
        paddingBottom: '17px',
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

const Selectors = ({ selectors, activeSelector, setActiveSelector }: PropsType) => {
    const styles = useStyles()

    return (
        <div className={styles.root}>
            {selectors.map(selector => (
                <button
                    key={selector.id}
                    onClick={() => setActiveSelector(selector)}
                    className={`${styles.selectorElement} ${activeSelector.id === selector.id ? "active" : ""}`}
                    data-color={selector.borderColor}
                    data-id={`selector-${selector.id}`}
                >
                    <Typography
                        variant="p"
                        fontFamily="Muller"
                        fontSize={14}
                        bold={activeSelector.id === selector.id}
                        theme={activeSelector.id === selector.id ? "black" : "gray"}
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