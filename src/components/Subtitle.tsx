import React from 'react';
import config from '../../config.json'

import styled from 'styled-components';

interface CustomTitleProps {
	titleColor: string;
}

interface ComponentProps {
		text: string;
		color: string;
		style?: object
}

export const Subtitle: React.FC<ComponentProps> = ({text, color, style}) => {
	
	return (
		<StyledSubtitle style={{...style}} titleColor={color}>{text}</StyledSubtitle>
	)
}

const StyledSubtitle = styled.span`
	font-family: ${config.secondary_font[0]};
	font-weight: bold;
	font-size: 70px;
	color: ${(p: CustomTitleProps) => p.titleColor}
`;





// Import React from 'react';
// import {interpolate, useCurrentFrame} from 'remotion';
// import {COLOR_1, FONT_FAMILY} from '../constants';

// const subtitle: React.CSSProperties = {
// 	fontFamily: FONT_FAMILY,
// 	fontSize: 40,
// 	textAlign: 'center',
// 	position: 'absolute',
// 	bottom: 140,
// 	width: '100%',
// };

// const codeStyle: React.CSSProperties = {
// 	color: COLOR_1,
// };

// export const Subtitle: React.FC = () => {
// 	const frame = useCurrentFrame();
// 	const opacity = interpolate(frame, [0, 30], [0, 1]);
// 	return (
// 		<div style={{...subtitle, opacity}}>
// 			Edit <code style={codeStyle}>src/Video.tsx</code> and save to reload.
// 		</div>
// 	);
// };
