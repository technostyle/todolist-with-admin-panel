import { createSelector } from "reselect";
import { prop } from "utils";

const authSelector = prop("auth");

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
  prop("loginErrorMessage", "")
);

export const getIsAuthLoading = createSelector(authSelector, prop("isLoading"));

export const getAuthToken = createSelector(authSelector, prop("token"));
