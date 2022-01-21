import { ReactNode } from 'react';

import ShadowBox from '../../enums/shadow';

interface Props {
	height?: string;
	width?: string;
	justifyContent?: string;
	alignItems?: string;
	boxShadow?: ShadowBox;
	display?: string | null;
	hasSoftRadius?: boolean;
	borderRadius?: string;
	children: ReactNode | Element;
}

export default Props;
