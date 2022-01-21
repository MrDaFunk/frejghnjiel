import { LazyExoticComponent, FC } from 'react';

import {
	Pagenames,
	AuthPagenames,
	TeamMakerPagenames,
	DashboardPagenames,
} from '../enums/pagename';

import { Props as ViewProps } from './page';

interface Props extends ViewProps {
	component: LazyExoticComponent<FC<ViewProps>> | FC<ViewProps>;
	pagename:
		| Pagenames
		| AuthPagenames
		| TeamMakerPagenames
		| DashboardPagenames;
}

export default Props;
