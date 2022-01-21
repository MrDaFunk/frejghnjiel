import { State, Action } from './State/State.interface';

import { Action as ConfigAction } from './config/config.interface';
import { Action as AuthAction } from './auth/auth.interface';

import configReducer from './config/config.reducer';
import authReducer from './auth/auth.reducer';

const reducer = ({ auth, config }: State, action: Action): State => ({
	config: configReducer(config, action as ConfigAction),
	auth: authReducer(auth, action as AuthAction),
});

export default reducer;
