import { set } from '../../services/storage';

import { State, Action } from './config.interface';

import {
	IS_DARK_MODE_ON,
	TOGGLE_IS_LOADING_TYPE,
	TOGGLE_IS_DARK_MODE_ON_TYPE,
} from './config.constants';

const reducer = (state: State, { type, payload }: Action): State => {
	const { isLoading, isDarkmodeOn } = state;

	switch (type) {
		case TOGGLE_IS_LOADING_TYPE:
			return { ...state, isLoading: payload ?? !isLoading };

		case TOGGLE_IS_DARK_MODE_ON_TYPE:
			set(IS_DARK_MODE_ON, !isDarkmodeOn);
			return { ...state, isDarkmodeOn: !isDarkmodeOn };

		default:
			return { ...state };
	}
};

export default reducer;
