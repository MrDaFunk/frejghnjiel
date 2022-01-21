import {
	State as AuthState,
	Action as AuthAction,
} from '../auth/auth.interface';
import {
	State as ConfigState,
	Action as ConfigAction,
} from '../config/config.interface';

type Action = ConfigAction | AuthAction;

interface State {
	auth: AuthState;
	config: ConfigState;
}

export type { Action, State };
