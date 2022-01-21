import { FC, memo } from 'react';

import Props from './Shadow.interface';
import StyledShadow from './Shadow.styled';

const Shadow: FC<Props> = ({
	display = null,
	hasSoftRadius = false,
	height,
	width,
	justifyContent,
	alignItems,
	boxShadow,
	children,
}) => (
	<StyledShadow
		sx={{ display }}
		borderRadius={hasSoftRadius ? '5rem !important' : '0'}
		height={height}
		width={width}
		justifyContent={justifyContent}
		alignItems={alignItems}
		boxShadow={boxShadow}
	>
		{children}
	</StyledShadow>
);

export default memo(
	Shadow,
	(prevProps, nextProps) => prevProps.children === nextProps.children
);
