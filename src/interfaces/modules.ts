import {
	Path,
	AuthAppPath,
	TeamMakerAppPath,
	DashboardAppPath,
} from '../enums/path';

import Apps from '../enums/apps';

import PagenameProps from './pagename';

interface MainRoute {
	app: Apps;
	path:
		| Path
		| AuthAppPath
		| TeamMakerAppPath
		| DashboardAppPath
	isExact: boolean;
	checkSession: boolean;
	isRootPath: boolean;
}

interface AllProps extends MainRoute {
	hasSession?: boolean;
}

type Route = MainRoute & PagenameProps;

type Props = PagenameProps & Omit<AllProps, 'app' | 'isRootPath'>;

export type { Props as default, MainRoute, Route };
