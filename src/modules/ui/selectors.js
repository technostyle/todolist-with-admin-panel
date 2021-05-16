import { createSelector } from "reselect";
import { prop } from "utils";

const uiSelector = prop("ui");

export const getNotifications = createSelector(
  uiSelector,
  prop("notifications")
);
