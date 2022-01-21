import { FetchProps, FetchError, Call } from '../interfaces/http';

import { logError } from '../services/components';

const handler = (err: FetchError) => logError(err);

const call = async <T>({
	url,
	options = {},
	avoidErrorOn404 = false,
}: FetchProps): Promise<Call<T>> => {
	try {
		const response = await fetch(url, options);
		const { ok, status, statusText } = response;

		if (!ok && avoidErrorOn404 && status !== 404) {
			throw Error(statusText);
		}

		return response;
	} catch (err) {
		handler(err);
	}

	return { json: async () => ({ success: false }) };
};

export default call;
