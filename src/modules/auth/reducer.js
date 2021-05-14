import { LOGIN, LOGOUT, SET_LOGIN_STATUS, SET_IS_LOADING } from "./actions";
const initialState = {
  isLoading: false,
  isLoggedIn: false,
  loginErrorMessage: "",
  token: null,
};

// TODO: desturcture action
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, isLoggedIn: true, token: payload };
    case LOGOUT:
      return { ...state, isLoggedIn: false, token: null };
    case SET_LOGIN_STATUS:
      return {
        ...state,
        loginErrorMessage: payload.errorMessage,
        isLoggedIn: payload.isLoggedIn,
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
