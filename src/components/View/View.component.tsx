import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useState } from '../../store/State';

import { Props as ViewProps } from '../../interfaces/page';
import Props from '../../interfaces/modules';

import Pagename from '../../components/Pagename';

import { AuthAppPath } from '../../enums/path';

const View: FC<Props> = ({
	isExact,
	path,
	component,
	pagename,
	checkSession,
}) => {
	const {
		auth: { hasSession },
	} = useState();
	if (checkSession && !hasSession) {
		return (
			<Route
				exact={isExact}
				path={path as string}
				render={({ location }: ViewProps) => (
					<Redirect
						to={{ pathname: AuthAppPath.LOGINPAGE, state: { referer: location } }}
					/>
				)}
			/>
		);
	}

	return (
		<Route
			exact={isExact}
			path={path as string}
			render={({ location }: ViewProps) => (
				<Pagename component={component} pagename={pagename} location={location} />
			)}
		/>
	);
};

export default View;
