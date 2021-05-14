import { createSelector } from "reselect";

const authSelector = (state) => state.auth;

export const getIsLoggedIn = createSelector(
  authSelector,
  (auth) => auth?.isLoggedIn
);

export const getLoginErrorMessage = createSelector(
  authSelector,
  (auth) => auth?.loginErrorMessage || ""
);

export const getIsAuthLoading = createSelector(
  authSelector,
  (auth) => auth?.isLoading
);
