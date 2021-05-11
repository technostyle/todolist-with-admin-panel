import { createSelector } from "reselect";
import { filterEmptyValues } from "utils";

const todosSelector = (state) => state.todos;

export const getTodos = createSelector(
  todosSelector,
  (state) => state?.todos || []
);

export const getIsTodosLoading = createSelector(
  todosSelector,
  (state) => state?.isLoading
);
export const getTotalTodosCount = createSelector(
  todosSelector,
  (todos) => todos?.totalTodosCount || 0
);

export const getFetchParams = createSelector(
  todosSelector,
  ({ page, sortDirection, sortField }) =>
    filterEmptyValues({ page, sortDirection, sortField })
);
