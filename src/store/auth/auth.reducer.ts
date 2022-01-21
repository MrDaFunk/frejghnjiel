import Storage from '../../enums/storage';

import { set, remove } from '../../services/storage';

import { Action, State } from './auth.interface';
import { LOG_IN, LOG_OUT } from './auth.constants';

const reducer = (state: State, { type, payload }: Action): State => {
	switch (type) {
		case LOG_IN:
			if (payload) {
				set(Storage.TOKEN, payload);
			}
			return { ...state, hasSession: true };

		case LOG_OUT:
			remove(Storage.TOKEN);
			return { ...state, hasSession: false };

		default:
			return { ...state };
	}
};

export default reducer;
