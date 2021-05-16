import { memoize } from "../utils";
import { DataProvider } from "./data-provider";

class LoginProvider extends DataProvider {
  constructor(dispatch, getState) {
    super(dispatch, getState, "LoginProvider");
  }

  postCreds = async (creds) => {
    try {
      return await this.httpPost({
        url: `${this.host}login`,
        params: creds,
        queryParams: this.defaultQueryParams,
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
}

export const loginProviderFabric = memoize(
  (dispatch, getState) => new LoginProvider(dispatch, getState)
);
