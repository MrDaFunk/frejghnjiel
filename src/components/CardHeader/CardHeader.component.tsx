import { FC, memo } from 'react';

import Props from './CardHeader.interface';
import StyledCardHeader from './CardHeader.styled';

const CardHeader: FC<Props> = ({ subheader }) => (
	<StyledCardHeader subheader={subheader} />
);

export default memo(
	CardHeader,
	(prevProps, nextProps) => prevProps.subheader === nextProps.subheader
);
