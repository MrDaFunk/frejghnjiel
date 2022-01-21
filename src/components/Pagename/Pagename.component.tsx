import { FC } from 'react';

import Props from '../../interfaces/pagename';

import useTitle from '../../hooks/useTitle';

const Pagename: FC<Props> = ({ pagename, component: Component, location }) => {
	useTitle(pagename);
	if (location) {
		return <Component location={location} />;
	}
	return <Component />;
};

export default Pagename;
