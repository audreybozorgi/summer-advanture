import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from '../constants/constants';
import styled from 'styled-components';

interface CustomTitleProps {
	titleColor: string;
}

const CustomTitle = styled.span`
	font-family: ${FONT_FAMILY};
	font-weight: bold;
	font-size: 70px;
	color: ${(p: CustomTitleProps) => p.titleColor}
`;

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	console.log('titleColor', titleColor);
	
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<CustomTitle titleColor={titleColor}>{titleText}</CustomTitle>
	)
}
