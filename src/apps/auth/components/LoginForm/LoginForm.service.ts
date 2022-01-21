import Method from '../../../../enums/http';
import { Call } from '../../../../interfaces/http';
import Session from '../../../../interfaces/session';
import call from '../../../../services/http';

import AUTH_LOGIN_PATH from './LoginForm.constants';
import Credentials from './LoginForm.interface';

const login = async (credentials: Credentials): Promise<Call<Session>> =>
	call({
		url: AUTH_LOGIN_PATH,
		options: {
			method: Method.POST,
			body: JSON.stringify(credentials),
		},
		avoidErrorOn404: true,
	});

export default login;
