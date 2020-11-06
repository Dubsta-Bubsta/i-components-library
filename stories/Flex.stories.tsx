import React from 'react';
import { Box, Flex } from '../src'
import styled from 'styled-components'
export default {
    title: 'Flex',
    argTypes: {
        alignItems: {
            defaultValue: { summary: 'center' },
        },
        justifyContent: {
            defaultValue: { summary: 'space-between' },
        },
        alignContent: {
            defaultValue: { summary: 'center' },
        },
        justifyItems: {
            defaultValue: { summary: 'center' },
        },
        flexDirection: {
            defaultValue: { summary: 'row' },
        },
    },
    args: {
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'initial',
        justifyItems: 'initail',
        flexDirection: 'row',
    },
};

const CustomBox = styled(Box)`
    margin: 10px;
`;

export const DefaultFlex = (props) => {
    return (
        <Flex {...props}>
            <CustomBox>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem ullam expedita nulla? Voluptatem, voluptas facilis at quia saepe doloribus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem ullam expedita nulla? Voluptatem, voluptas facilis at quia saepe doloribus!
            </CustomBox>
            <CustomBox>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem ullam expedita nulla? Voluptatem, voluptas facilis at quia saepe doloribus!
            </CustomBox>
            <CustomBox>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem ullam expedita nulla? Voluptatem, voluptas facilis at quia saepe doloribus!
            </CustomBox>
        </Flex>

    );
};