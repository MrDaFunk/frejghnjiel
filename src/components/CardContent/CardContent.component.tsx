import { FC, memo } from 'react';

import StyledCardContent from './CardContent.styled';
import Props from './CardContent.interface';

const CardContent: FC<Props> = ({ children }) => (
	<StyledCardContent>{children}</StyledCardContent>
);

export default memo(
	CardContent,
	(prevProps, nextProps) => prevProps.children === nextProps.children
);
