import { ReactNode } from 'react';

interface CardShadowProps {
	shadow?: boolean;
}

interface CardMiddleProps {
	middle?: boolean;
	fullHeight?: boolean;
}

interface Props extends CardShadowProps, CardMiddleProps {
	children: ReactNode | (false | Element)[];
	extended?: boolean;
}

export type { Props, CardShadowProps, CardMiddleProps };
