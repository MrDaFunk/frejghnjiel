import { FC, memo } from 'react';

import StyledCardFooter from './CardFooter.styled';
import Props from './CardFooter.interface';

const CardFooter: FC<Props> = ({ children }) => (
	<StyledCardFooter>{children}</StyledCardFooter>
);

export default memo(
	CardFooter,
	(prevProps, nextProps) => prevProps.children === nextProps.children
);
