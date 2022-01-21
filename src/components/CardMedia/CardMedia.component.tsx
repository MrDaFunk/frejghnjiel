import { FC, memo } from 'react';

import Props from './CardMedia.interface';
import StyledCardMedia from './CardMedia.styled';

const CardMedia: FC<Props> = ({ image, title }) => (
	<StyledCardMedia image={image} title={title} />
);

export default memo(
	CardMedia,
	(prevProps, nextProps) => prevProps.image === nextProps.image
);
