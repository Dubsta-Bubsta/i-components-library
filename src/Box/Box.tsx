import React from 'react'
import styled, { css } from 'styled-components'

type PropsType = {
    padding?: number | string
}

const Box = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-sizing: border-box;
    width: fit-content;

    ${(props: PropsType) => css`
        padding: ${props.padding ? props.padding : "20px"};
	`}
    
`;

export default Box;