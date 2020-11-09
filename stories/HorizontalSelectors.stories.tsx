import React, { useState } from 'react';
import { Box, HorizontalSelectors, HorizontalSelectorType, colors } from '../src'

export default {
    title: 'HorizontalSelectors',

    argTypes: {
        selectors: {
            control: 'object',
            description: `Required. \n Selectors array. \n
            Array<{ \n
                id: number, 
                label: string,  
                borderColor?: string  
            }>`,
            defaultValue:  { summary: "[]" }
        },
        activeSelectorId: {
            description: `Required. Active selector ID, which you can handle inside your parent component. 
            \n
                number | string 
            `,
        },
        setActiveSelector: {
            description: `Required. Setting active selector Function. 
            \n
            (id: number | string) => void
            `
        },
        style: {
            control: 'object',
            defaultValue: { summary: "{}" },
            description: "Style of selectors parent block"
        },

        selectorStyle: {
            control: 'object',
            defaultValue: { summary: "{}" },
            description: "Style of each selector"
        }

        
    },
    args: {
        style: { display: 'flex' },
        selectorStyle: { display: 'block' },
        selectors:  [
            { id: 1, label: 'Ожидаемые', borderColor: colors.yellow },
            { id: 2, label: 'Одобренные', borderColor: colors.green },
            { id: 3, label: 'Отклоненные', borderColor: colors.red },
        ]
    },
};
export const SelectorsExample = (props) => {
    const selectors = [
        { id: 1, label: 'Ожидаемые', borderColor: colors.yellow },
        { id: 2, label: 'Одобренные', borderColor: colors.green },
        { id: 3, label: 'Отклоненные', borderColor: colors.red },
    ] as Array<HorizontalSelectorType>
    const [activeSelector, setActiveSelector] = useState(selectors[0].id)

    return (
        <HorizontalSelectors {...props} selectors={selectors} activeSelectorId={activeSelector} setActiveSelector={setActiveSelector}/>
    );
};

