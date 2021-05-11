import { createSelector } from "reselect";
import { getTotalTodosCount, getFetchParams } from "../todos/selectors";

// const paginationSelector = (state) => state.pagination;

export const getCurrentPage = createSelector(
  getFetchParams,
  (fetchParams) => fetchParams?.page || 0
);
export const getMaxPage = createSelector(
  getTotalTodosCount,
  (count) => Math.floor(count / 3) + 1
);
