import { createSelector } from "reselect";

const todosSelector = (state) => console.log(state) || state.todos;

export const getTodos = createSelector(
  todosSelector,
  (state) => state?.todos || []
);
