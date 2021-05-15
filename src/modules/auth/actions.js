import { loginProvider } from "data-provider/login";
import { mapAuthCredsToServer } from "../../api/mappers";
import { getSessionStorageToken, setSessionTokenToStorage } from "../../utils";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
export const SET_IS_LOADING = "SET_IS_LOADING";

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

export const loginThunk = (creds) => async (dispatch) => {
  dispatch(setIsLoading(true));
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

export const authentificate = () => (dispatch) => {
  const token = getSessionStorageToken();
  if (token) dispatch(login(token));
};
