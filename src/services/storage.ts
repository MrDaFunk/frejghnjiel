import { Value, Param } from '../interfaces/storage';

import { ERROR, DEFAULT } from '../constants/storage';

import { logError } from '../services/components';

const get = <T>(key: string, defaultValue: Value<T> = null): Value<T> => {
	try {
		return JSON.parse(localStorage.getItem(key) ?? DEFAULT) ?? defaultValue;
	} catch (error) {
		logError(`${ERROR}'${key}'`);
		return null;
	}
};

const set = (key: string, value: Param): void =>
	localStorage.setItem(key, JSON.stringify(value));

const remove = (key: string): void => localStorage.removeItem(key);

const clear = (): void => localStorage.clear();

export { get, set, remove, clear };
