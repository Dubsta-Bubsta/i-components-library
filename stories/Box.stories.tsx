import React from 'react';
import { Box } from '../src'

export default {
    title: 'Box',
    argTypes: {
        padding: {
            defaultValue: { summary: '20px' },
        },
        
    },
    args: {
        padding: '20px'
    },
};

export const DefaultBox = (props) => {
    return (
        <Box style={{ maxWidth: 500, margin: '50px auto' }} {...props}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem ullam expedita nulla? Voluptatem, voluptas facilis at quia saepe doloribus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem ullam expedita nulla? Voluptatem, voluptas facilis at quia saepe doloribus!
        </Box>
    );
};