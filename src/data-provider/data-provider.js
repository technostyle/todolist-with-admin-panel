import { getBackendHost, getDeveloperName } from "../modules/auth/selectors";

export class DataProvider {
  store = {};
  host = "";
  developerName = "";
  constructor(dispatch, getState, className) {
    console.log(`${className} constructor invoked`, { dispatch, getState });
    this.store = { dispatch, getState };
    this.host = getBackendHost(getState());
    this.developerName = getDeveloperName(getState());
  }
}
