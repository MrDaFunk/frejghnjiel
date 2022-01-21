import { FC, Fragment, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Props from '../../interfaces/modules';

import Header from '../../components/Header';
import View from '../../components/View';
import Loading from '../../components/Loading';

import { APPS } from '../../constants/config';
import MODULES from '../../constants/module';

const Routes: FC = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Suspense fallback={<Loading fullHeight />}>
				{MODULES.filter(({ app }) => APPS.indexOf(app) !== -1).map(
					({ isExact, path, component, pagename, checkSession }: Props) => (
						<Fragment key={path}>
							<View
								isExact={isExact}
								path={path}
								component={component}
								pagename={pagename}
								checkSession={checkSession}
							/>
						</Fragment>
					)
				)}
			</Suspense>
		</Switch>
	</BrowserRouter>
);

export default Routes;
