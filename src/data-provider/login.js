import { httpService } from "api/http-service";
import { memoize } from "../utils";
import { DataProvider } from "./data-provider";

class LoginProvider extends DataProvider {
  constructor(dispatch, getState) {
    super(dispatch, getState, "LoginProvider");
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
