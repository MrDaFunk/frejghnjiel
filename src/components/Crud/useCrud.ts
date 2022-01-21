import { HookResponse } from "../../interfaces/http";

import { AUTH_TOKEN } from "../../constants/config";

import Method from "../../enums/http";

import useFetch from "../../hooks/useFetch";

const useCrud = <T>(url: string, token: string): HookResponse<T> =>
  useFetch<T>({
    url,
    options: {
      method: Method.GET,
      headers: {
        [AUTH_TOKEN as string]: token
      },
      credentials: "include"
    },
    abort: token === ""
  });

export default useCrud;
