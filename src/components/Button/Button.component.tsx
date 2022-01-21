import { FC, useCallback } from 'react';

import Shadow from '../../components/Shadow';

import ButtonType from '../../enums/button';
import ColorType from '../../enums/color';
import { ButtonVariant } from '../../enums/variant';
import ShadowBox from '../../enums/shadow';

import Props from './Button.interface';
import StyledButton from './Button.styled';

const Button: FC<Props> = ({
	type = ButtonType.BUTTON,
	color = type === ButtonType.SUBMIT ? ColorType.PRIMARY : ColorType.INHERIT,
	variant = ButtonVariant.OUTLINED,
	onClick,
	children,
}) => {
	console.log('rendered');
	const handleClick = useCallback(() => {
		if (onClick) {
			onClick();
		}
	}, [onClick]);
	return (
		<Shadow
			display='inline-flex'
			boxShadow={ShadowBox.SIZE_3}
			hasSoftRadius
			width='fit-content'
		>
			<StyledButton
				type={type}
				color={color}
				variant={variant}
				onClick={() => handleClick()}
			>
				{children}
			</StyledButton>
		</Shadow>
	);
};

export default Button;
