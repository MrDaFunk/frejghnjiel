import { State } from './State.interface';

import INITIAL_CONFIG_STATE from '../config/config.state';
import INITIAL_AUTH_STATE from '../auth/auth.state';

const ERROR = 'Unkown action type: ';

const INITIAL_STATE: State = {
	config: INITIAL_CONFIG_STATE,
	auth: INITIAL_AUTH_STATE,
};

export { INITIAL_STATE, ERROR };
