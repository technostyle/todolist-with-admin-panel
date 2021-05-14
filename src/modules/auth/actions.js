import { loginProvider } from "data-provider/login";
import { mapAuthCredsToServer } from "../../api/mappers";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (token) => ({
  type: LOGIN,
  payload: token,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginThunk = (creds) => async (dispatch) => {
  try {
    const rawResponse = await loginProvider.postCreds(
      mapAuthCredsToServer(creds)
    );
    const token = rawResponse?.message?.token;
    console.log({ token, rawResponse });
    dispatch(login(token));
  } catch (e) {
    console.error(e);
  }
};

export const logoutThunk = () => (dispatch) => {
  dispatch(logout());
};
