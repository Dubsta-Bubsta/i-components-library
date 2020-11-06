import React from 'react';
import { IconButton, colors, Flex } from '../src'
import styled from 'styled-components'

export default {
    title: 'IconButton',
    argTypes: {
        children: {
            required: true,
            defaultValue: { summary: '' },
            description: "Button icon (Svg or image as Component)"
        },
        themeColor: {  
            control: 'color',
            defaultValue: { summary: `${colors.purple} (purple)` },
            description: "Button background"
        },
        size: {
            control: {
                type: 'select',
                options: [
                    "small", "default"
                ],
            },
            description: "Button size",
            defaultValue: { summary: 'default' },
        },
       
    },
    args: {
        children: '',
        themeColor: colors.purple,
        size: "default"
    },
};


export const IconButtonExample = (props) => {
    return (
        <IconButton {...props}>
            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.83448 7.23684L0 9.07895L5.89655 15C11.0138 9.86152 13.8828 6.98058 19 1.84211L17.1655 0L5.89655 11.3158L1.83448 7.23684Z" fill="white" />
            </svg>
        </IconButton>
    );
};
