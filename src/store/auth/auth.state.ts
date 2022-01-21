import { State } from './auth.interface';

import { get } from '../../services/storage';
import Storage from '../../enums/storage';

const INITIAL_STATE: State = {
	hasSession: get(Storage.TOKEN) || false,
};

export default INITIAL_STATE;
