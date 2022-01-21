import { get } from '../../services/storage';
import Storage from '../../enums/storage';

import { DARK_MODE_PREFERENCE } from './config.constants';
import { State } from './config.interface';

const INITIAL_STATE: State = {
	isLoading: false,
	isDarkmodeOn:
		get(Storage.IS_DARK_MODE_ON) ??
		window.matchMedia(DARK_MODE_PREFERENCE).matches,
};

export default INITIAL_STATE;
