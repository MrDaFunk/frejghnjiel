import { Action } from './config.interface';
import { TOGGLE_IS_DARK_MODE_ON_TYPE } from './config.constants';

const TOGGLE_IS_DARK_MODE_ON = (isModeOn: boolean): Action => ({
	type: TOGGLE_IS_DARK_MODE_ON_TYPE,
	payload: isModeOn,
});

export default TOGGLE_IS_DARK_MODE_ON;
