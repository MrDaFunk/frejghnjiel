import { Action } from './auth.interface';
import {
	LOG_IN as LOG_IN_TYPE,
	LOG_OUT as LOG_OUT_TYPE,
} from './auth.constants';

const LOG_IN = (token: string): Action => ({
	type: LOG_IN_TYPE,
	payload: token,
});

const LOG_OUT = (): Action => ({
	type: LOG_OUT_TYPE,
});

export { LOG_IN, LOG_OUT };
