import React from 'react';
import { Tooltip, colors, Typography } from '../src'
import { storiesOf } from '@storybook/react';
import { fonts } from '../src'

export default {
    title: 'Typography',
    argTypes: {
        children: {
            required: true,
            defaultValue: { summary: '' }
        },
        variant: {
            control: {
                type: 'select',
                options: [
                    "p", "sp1", "sp2", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle", "body", "small", "additional"
                ],
            },
            description: "Выбор HTML компонента",
            defaultValue: { summary: 'p' },
        },
        theme: {
            control: {
                type: 'select',
                options: [
                    'black', 'gray', 'white'
                ],
            },
            defaultValue: { summary: 'black' }

        },
        color: {  
            control: 'color',
        },
        bold: {
            control: 'boolean',
            defaultValue: { summary: false },
        },
        
        fontFamily: {
            control: {
                type: 'select',
                options: [
                    fonts.muller, fonts.openSans
                ],
            },
            defaultValue: { summary: 'Muller' },
        },
        fontSize: { },
        lineHeight: { }
    },
    args: {
        children: 'Текст',
        variant: "p",
        theme: 'black',
        bold: false,
        fontFamily: fonts.muller,
    },
};
export const TypographyExample = (props) => {
    return (
        <Typography {...props} />
    )
}