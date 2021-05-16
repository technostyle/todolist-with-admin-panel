import { getBackendHost, getDeveloperName } from "../modules/auth/selectors";
import { HttpService } from "../services/http-service";

export class DataProvider extends HttpService {
  store = {};
  host = "";
  defaultQueryParams = {};
  constructor(dispatch, getState, className) {
    console.info(
      `%c${className} constructor invoked`,
      "font-style: bold; color: green"
    );
    super();
    this.store = { dispatch, getState };
    this.host = getBackendHost(getState());
    this.defaultQueryParams = {
      developer: getDeveloperName(getState()),
    };
  }
}
