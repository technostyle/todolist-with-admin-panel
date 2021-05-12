export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginThunk = () => (dispatch) => {
  dispatch(login());
};

export const logoutThunk = () => (dispatch) => {
  dispatch(logout());
};
