import { httpService } from "api/http-service";
import { HOST } from "api/constants";
import { getBackendHost } from "../modules/auth/selectors";
import { memoize } from "../utils";

class LoginProvider {
  store = {};
  host = "";
  constructor(dispatch, getState) {
    console.log("constructor invoked", { dispatch, getState });
    this.store = { dispatch, getState };
    const host = getBackendHost(getState());
    this.host = host;
  }

  postCreds = async (creds) => {
    try {
      return await httpService.post(`${this.host}login`, creds);
    } catch (e) {
      throw e;
    }
  };
}

export const loginProviderFabric = memoize(
  (dispatch, getState) => new LoginProvider(dispatch, getState)
);
