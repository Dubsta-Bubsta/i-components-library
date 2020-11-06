import React from 'react';
import { Box, Flex, colors } from '../src'
import styled, { css } from 'styled-components'
export default {
    title: 'Colors',
};


const ColorCircle = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 100px;
	margin: 10px;
	border: 1px solid ${colors.lightGray};
	${(props) => css`
		background: ${props.color}
	`}
`;
const ColorBlock = ({ color, ...props }) => {
	return (
		<Flex flexDirection="column" >
            <ColorCircle color={color} />
			<p>{color}</p>
		</Flex>
	)
}


export const Colors = () => {
    return (
        <>
			<Flex justifyContent="initial">
				<ColorBlock color={colors.mainBlue} />
				<ColorBlock color={colors.additionalBlue} />
				<ColorBlock color={colors.lightBlue} />
				<ColorBlock color={colors.green} />
				<ColorBlock color={colors.purple} />
				<ColorBlock color={colors.red} />
				<ColorBlock color={colors.yellow} />
			</Flex>

			<Flex justifyContent="initial">
				<ColorBlock color={colors.black} />
				<ColorBlock color={colors.defaultBlack} />
				<ColorBlock color={colors.darkGray} />
				<ColorBlock color={colors.defaultGray} />
				<ColorBlock color={colors.lightGray} />
				<ColorBlock color={colors.white} />
			</Flex>
		</>

    );
};