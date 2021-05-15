import { createSelector } from "reselect";
import { prop } from "utils";

const uiSelector = prop("ui");
// const uiSelector = state => console.log(state) || state.ui;

export const getNotifications = createSelector(
  uiSelector,
  (ui) => {
    console.log("getNotifications", { ui });
    return ui.notifications;
  }
  // prop("notifications")
);
