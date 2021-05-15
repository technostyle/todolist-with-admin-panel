import { httpService } from "api/http-service";
import { getBackendHost } from "../modules/auth/selectors";
import { memoize } from "../utils";

class DataProvider {
  store = {};
  host = "";
  constructor(dispatch, getState) {
    console.log("constructor invoked", { dispatch, getState });
    this.store = { dispatch, getState };
    this.host = getBackendHost(getState());
  }

  postCreds = async (creds) => {
    try {
      return await httpService.post(`${this.host}login`, creds);
    } catch (e) {
      throw e;
    }
  };
}

export const dataProviderFabric = memoize(
  (dispatch, getState) => new DataProvider(dispatch, getState)
);
