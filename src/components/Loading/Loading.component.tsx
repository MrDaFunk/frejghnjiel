import { FC, memo } from 'react';

import Color from '../../enums/color';

import { Loading as LoadingWheel, Container } from './Loading.styled';
import Props from './Loading.interface';

const Loading: FC<Props> = ({ fullHeight = false }) => {
	return (
		<Container fullHeight={fullHeight}>
			<LoadingWheel color={Color.PRIMARY} />
		</Container>
	);
};

export default memo(Loading);
