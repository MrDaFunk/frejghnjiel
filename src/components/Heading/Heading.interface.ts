import { ReactNode } from 'react';

import HeadingType from '../../enums/heading';

interface Props {
	type: HeadingType;
	children: ReactNode | string;
}

type Tagname = Lowercase<keyof typeof HeadingType>;

export type { Props, Tagname };
