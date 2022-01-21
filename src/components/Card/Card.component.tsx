import { FC, memo } from 'react';

import Shadow from '../../components/Shadow';

import ShadowBox from '../../enums/shadow';

import { CardShadowProps, CardMiddleProps, Props } from './Card.interface';
import StyledCard from './Card.styled';

const CardMiddle: FC<CardMiddleProps> = ({ children, fullHeight, middle }) => {
	if (middle) {
		return (
			<Shadow
				display='flex'
				height={fullHeight ? '100vh' : 'auto'}
				justifyContent='center'
				alignItems='center'
			>
				{children}
			</Shadow>
		);
	}

	return <>{children}</>;
};

const CardShadow: FC<CardShadowProps> = ({ children, shadow }) => {
	if (shadow) {
		return <Shadow boxShadow={ShadowBox.SIZE_3}>{children}</Shadow>;
	}

	return <>{children}</>;
};

const Card: FC<Props> = ({
	shadow,
	middle,
	fullHeight,
	children,
	extended = false,
}) => (
	<CardMiddle fullHeight={fullHeight} middle={middle}>
		<CardShadow shadow={shadow}>
			<StyledCard
				sx={{ minWidth: extended ? 'calc(100vw - 5em)' : 300, marginTop: '2em' }}
			>
				{children}
			</StyledCard>
		</CardShadow>
	</CardMiddle>
);

export default memo(
	Card,
	(prevProps, nextProps) => prevProps.children === nextProps.children
);
