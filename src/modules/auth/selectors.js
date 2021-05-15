import { createSelector } from "reselect";
import { prop } from "utils";

const authSelector = (state) => state.auth;

export const getDeveloperName = createSelector(
  authSelector,
  prop("developerName")
);

export const getBackendHost = createSelector(authSelector, prop("backendHost"));

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

export const getAuthToken = createSelector(authSelector, prop("token"));
