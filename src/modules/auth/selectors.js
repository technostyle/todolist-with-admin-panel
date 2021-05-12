import { createSelector } from "reselect";

const authSelector = (state) => state.auth;

export const getIsLoggedIn = createSelector(
  authSelector,
  (auth) => auth?.isLoggedIn
);
