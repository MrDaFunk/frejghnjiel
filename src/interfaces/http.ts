import Methods from "../enums/http";

type FetchError = Error | unknown;

interface SuccessCall<T> {
  ok: boolean;
  data?: T;
  statusText?: string;
  errors?: [
    {
      errorMessage: string;
    }
  ];
}

interface Call<T> {
  ok?: boolean;
  status?: number;
  statusText?: string;
  json: () => Promise<any>;
}

interface FetchProps {
  url: string;
  options?: {
    headers?: {
      [x: string]: string;
    };
    method?: Methods;
    body?: string;
    credentials?: "include";
  };
  avoidErrorOn404?: boolean;
  abort?: boolean;
}

type HookResponse<T> = [SuccessCall<T>, string, boolean, boolean];

export type { FetchError, Call, HookResponse, FetchProps, SuccessCall };
