import {
  LOGIN,
  LOGOUT,
  SET_LOGIN_STATUS,
  SET_IS_LOADING,
  SET_DEVELOPER_NAME,
  SET_BACKEND_HOST,
} from "./actions";
const initialState = {
  developerName: "",
  backendHost: "",
  isLoading: false,
  isLoggedIn: false,
  loginErrorMessage: "",
  token: null,
};

// TODO: desturcture action
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DEVELOPER_NAME:
      return { ...state, developerName: payload };
    case SET_BACKEND_HOST:
      return { ...state, backendHost: payload };
    case LOGIN:
      return { ...state, isLoggedIn: true, token: payload };
    case LOGOUT:
      return { ...state, isLoggedIn: false, token: null };
    case SET_LOGIN_STATUS:
      return {
        ...state,
        loginErrorMessage: payload.errorMessage,
        isLoggedIn: payload.isLoggedIn,
        token: payload.token || null,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
