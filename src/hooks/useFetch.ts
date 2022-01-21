import { useEffect, useState, useRef } from 'react';

import { FetchProps, HookResponse, SuccessCall } from '../interfaces/http';

import call from '../services/http';

const useFetch = <T>(props: FetchProps): HookResponse<T> => {
	const [data, setData] = useState<SuccessCall<T>>({ success: false });
	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [done, setDone] = useState<boolean>(false);
	const { avoidErrorOn404 = false, abort = false } = props;
	const { current: refProps } = useRef(props);
	useEffect(() => {
		const fetch = async () => {
			// setIsLoading(true);
			const response = await call<T>(refProps);
			const json = await response.json();
			const {
				errors: { length, 0: { errorMessage: message } } = {
					length: 0,
					0: { errorMessage: '' },
				},
			} = json;

			if (!avoidErrorOn404 && length > 0) {
				setError(message);
			}

			setData(json);
			setDone(true);
			setIsLoading(false);
		};

		if (abort) {
			setDone(true);
			setIsLoading(false);
		}

		if (!done && !abort) {
			fetch();
		}
	}, [avoidErrorOn404, abort, isLoading, refProps, done]);

	return [data, error, isLoading, done];
};

export default useFetch;
