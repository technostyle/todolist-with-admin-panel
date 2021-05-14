import { httpService } from "api/http-service";
import { HOST } from "api/constants";

class LoginProvider {
  postCreds = async (creds) => {
    try {
      return await httpService.post(`${HOST}login`, creds);
    } catch (e) {
      console.error(e);
    }
  };
}

export const loginProvider = new LoginProvider();
