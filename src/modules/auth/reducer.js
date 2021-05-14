import { LOGIN, LOGOUT } from "./actions";
const initialState = {
  isLoggedIn: false,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true, token: action.payload };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
