import { createSelector } from "reselect";
import { filterEmptyValues, prop } from "utils";

const todosSelector = (state) => state.todos;

export const getTodos = createSelector(todosSelector, prop("todos", []));

export const getIsTodosLoading = createSelector(
  todosSelector,
  prop("isLoaing")
);
export const getTotalTodosCount = createSelector(
  todosSelector,
  prop("totalTodosCount", 0)
);

export const getFetchParams = createSelector(
  todosSelector,
  ({ page, sortDirection, sortField }) =>
    filterEmptyValues({ page, sortDirection, sortField })
);

export const getFetchSortParams = createSelector(
  getFetchParams,
  ({ sortDirection, sortField }) => ({ sortDirection, sortField })
);
