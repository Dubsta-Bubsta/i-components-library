import React from 'react';
import { Tooltip, colors } from '../src'

export default {
    title: 'Tooltip',
    argTypes: {
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
        iconType: 'success',
        title: "Lorem Ipsum - это текст-рыба",
        description: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне.",
        themeColor: colors.defaultGray,
    },
};

export const DefaultTooltip = (props) => (
    <Tooltip {...props} />
)