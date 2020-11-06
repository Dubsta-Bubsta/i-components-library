import React from 'react';
import { Tooltip, colors } from '../src'

export default {
    title: 'Tooltip',
    argTypes: {
        children: {
            required: true,
            defaultValue: { summary: '' },
            description: "Button icon (Svg or image as Component)"
        },
        iconType: {
            control: {
                type: 'select',
                options: [
                    "success", "error"
                ],
            },
            description: "Icon of tooltip",
            defaultValue: { summary: 'success' },
        },
        themeColor: {
            control: 'color',
            defaultValue: { summary: `${colors.defaultGray} (default gray)` },
            description: "Tooltip background"
        },
        title: {
            defaultValue: { 
                summary: "",
            },
            description: "Tooltip title"
        },
        description: {
            defaultValue: { 
                summary: "",
            },
            description: "Tooltip description"
        },
    },
    args: {
        children: '',
        iconType: 'success',
        title: "Lorem Ipsum - это текст-рыба",
        description: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне.",
        themeColor: colors.defaultGray,
    },
};

export const DefaultTooltip = (props) => (
    <Tooltip {...props} />
)