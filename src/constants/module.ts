import { lazy } from 'react';

import {
	Path,
	AuthAppPath,
	TeamMakerAppPath,
	DashboardAppPath,
} from '../enums/path';

import {
	Pagenames,
	AuthPagenames,
	TeamMakerPagenames,
	DashboardPagenames,
} from '../enums/pagename';

import Apps from '../enums/apps';

import { Route } from '../interfaces/modules';

const MODULES: Route[] = [
	{
		app: Apps.HOME,
		path: Path.HOMEPAGE,
		component: lazy(() => import('../pages/home')),
		isExact: true,
		checkSession: false,
		pagename: Pagenames.HOMEPAGE,
		isRootPath: true,
	},
	{
		app: Apps.DASHBOARD,
		path: DashboardAppPath.HOMEPAGE,
		component: lazy(() => import('../apps/dashboard/pages/home')),
		isExact: false,
		checkSession: true,
		pagename: DashboardPagenames.HOMEPAGE,
		isRootPath: true,
	},
	{
		app: Apps.TEAM_MAKER,
		path: TeamMakerAppPath.HOMEPAGE,
		component: lazy(() => import('../apps/team-maker/pages/home')),
		isExact: false,
		checkSession: true,
		pagename: TeamMakerPagenames.HOMEPAGE,
		isRootPath: true,
	},
	{
		app: Apps.AUTH,
		path: AuthAppPath.LOGINPAGE,
		component: lazy(() => import('../apps/auth/pages/login')),
		isExact: false,
		checkSession: false,
		pagename: AuthPagenames.LOGIN,
		isRootPath: false,
	},
];

export default MODULES;
