import { getBackendHost, getDeveloperName } from "../modules/auth/selectors";
import { HttpService } from "../services/http-service";

export class DataProvider extends HttpService {
  store = {};
  host = "";
  developerName = "";
  httpService = {};
  constructor(dispatch, getState, className) {
    console.info(`${className} constructor invoked`, { dispatch, getState });
    super();
    this.httpService.get = this.get;
    this.httpService.post = this.post;
    this.store = { dispatch, getState };
    this.host = getBackendHost(getState());
    this.developerName = getDeveloperName(getState());
  }
}