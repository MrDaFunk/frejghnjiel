import { useEffect } from 'react';

import { APP_NAME } from '../constants/config';

const useTitle = (title: string): void => {
	const setPagename = (pagename: string) => `${pagename} - ${APP_NAME}`;

	useEffect(() => {
		const prevTitle = document.title;
		document.title = setPagename(title);
		return () => {
			document.title = setPagename(prevTitle);
		};
	});
};

export default useTitle;
