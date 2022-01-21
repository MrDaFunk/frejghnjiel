import { ReactNode } from 'react';

import ButtonType from '../../enums/button';
import ColorType from '../../enums/color';
import { ButtonVariant } from '../../enums/variant';

interface Props {
	variant?: ButtonVariant;
	color?: ColorType;
	type?: ButtonType;
	onClick?: () => void;
	children: ReactNode | string;
}

export default Props;
