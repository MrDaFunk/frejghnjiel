import { useEffect, useState, useRef } from "react";

import { FetchProps, HookResponse, SuccessCall } from "../interfaces/http";

import call from "../services/http";

const useFetch = <T>(props: FetchProps): HookResponse<T> => {
  const [data, setData] = useState<SuccessCall<T>>({ ok: false });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [done, setDone] = useState<boolean>(false);
  const { avoidErrorOn404 = false, abort = false } = props;
  const { current: refProps } = useRef(props);

  useEffect(() => {
    const fetch = async () => {
      // setIsLoading(true);
      const response = await call<any>(refProps);
      const json = await response.json();

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
  }, [avoidErrorOn404, abort, refProps, done]);

  return [data, "", isLoading, done];
};

export default useFetch;
