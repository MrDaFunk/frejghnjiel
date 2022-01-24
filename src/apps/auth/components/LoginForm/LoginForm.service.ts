import { stringify } from "query-string";

import Method from "../../../../enums/http";
import { Call } from "../../../../interfaces/http";
// import Session from "../../../../interfaces/session";
import call from "../../../../services/http";

import AUTH_LOGIN_PATH from "./LoginForm.constants";
import Credentials from "./LoginForm.interface";

const login = async (credentials: Credentials): Promise<Call<any>> =>
  call({
    url: `${AUTH_LOGIN_PATH}?${stringify(credentials)}`,
    options: {
      method: Method.GET
    },
    avoidErrorOn404: true
  });

export default login;
