import { loginProviderFabric } from "data-provider/login";
import { mapAuthCredsToServer } from "../../api/mappers";
import { getSessionStorageToken, setSessionTokenToStorage } from "../../utils";
export const SET_DEVELOPER_NAME = "SET_DEVELOPER_NAME";
export const SET_BACKEND_HOST = "SET_BACKEND_HOST";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
export const SET_IS_LOADING = "SET_IS_LOADING";

export const setDeveloperName = (name) => ({
  type: SET_DEVELOPER_NAME,
  payload: name,
});

export const setBackendHost = (host) => ({
  type: SET_BACKEND_HOST,
  payload: host,
});

export const login = (token) => ({
  type: LOGIN,
  payload: token,
});

export const logout = () => ({
  type: LOGOUT,
});

const setLoginStatus = (status) => ({
  type: SET_LOGIN_STATUS,
  payload: status,
});

const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

export const loginThunk = (creds) => async (dispatch, getState) => {
  dispatch(setIsLoading(true));
  const loginProvider = loginProviderFabric(dispatch, getState);
  try {
    const { token } = await loginProvider.postCreds(
      mapAuthCredsToServer(creds)
    );
    if (!token) {
      throw { toString: () => "Ошибка при получении токена" };
    }
    setSessionTokenToStorage(token);
    dispatch(setLoginStatus({ isLoggedIn: true, errorMessage: "" }));
  } catch (e) {
    setSessionTokenToStorage(null);
    dispatch(
      setLoginStatus({
        isLoggedIn: false,
        errorMessage:
          e?.message?.password || e?.toString() || "Ошибка авторизации",
      })
    );
  }
  dispatch(setIsLoading(false));
};

export const logoutThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  setSessionTokenToStorage(null);
  dispatch(logout());
  dispatch(setIsLoading(false));
};

// TODO: rename initialize?
export const authentificate = () => (dispatch) => {
  dispatch(setDeveloperName("danila"));
  dispatch(
    setBackendHost(`https://uxcandy.com/~shapoval/test-task-backend/v2/`)
  );
  const token = getSessionStorageToken();
  if (token) dispatch(login(token));
};
