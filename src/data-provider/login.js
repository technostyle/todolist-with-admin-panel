import { memoize } from "../utils";
import { DataProvider } from "./data-provider";

const noop = () => {};
class LoginProvider extends DataProvider {
  get = noop;
  post = noop;
  constructor(dispatch, getState) {
    super(dispatch, getState, "LoginProvider");
    console.log(this.get);
  }

  postCreds = async (creds) => {
    try {
      return await this.httpService.post(`${this.host}login`, creds);
    } catch (e) {
      throw e;
    }
  };
}

export const loginProviderFabric = memoize(
  (dispatch, getState) => new LoginProvider(dispatch, getState)
);
