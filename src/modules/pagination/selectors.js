import { createSelector } from "reselect";
import { getTotalTodosCount, getFetchParams } from "../todos/selectors";
import { equal, equals } from "../../utils";

export const getCurrentPage = createSelector(
  getFetchParams,
  (fetchParams) => fetchParams?.page || 1
);
export const getMaxPage = createSelector(getTotalTodosCount, (count) =>
  Math.ceil(count / 3)
);

export const getIsMinPage = createSelector(getCurrentPage, equals(1));
export const getIsMaxPage = createSelector([getCurrentPage, getMaxPage], equal);
