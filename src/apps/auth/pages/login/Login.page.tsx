import { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { Path } from '../../../../enums/path';
import { Props, LocationProps } from '../../../../interfaces/page';
import { useState } from '../../../../store/State';

import LoginForm from '../../components/LoginForm';

const Login: FC<Props> = ({ location }) => {
	const {
		auth: { hasSession },
	} = useState();

	const pathname =
		(location as LocationProps)?.state?.referer?.pathname || Path.HOMEPAGE;

	if (hasSession) {
		return <Redirect to={{ pathname }} />;
	}

	return <LoginForm />;
};

export default Login;
