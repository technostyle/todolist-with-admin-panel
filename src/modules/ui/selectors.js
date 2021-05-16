import { createSelector } from "reselect";
import { prop } from "utils";
import { getTodos } from "../todos/selectors";

const uiSelector = prop("ui");

export const getNotifications = createSelector(
  uiSelector,
  prop("notifications")
);

const getHandledTodoInfo = createSelector(uiSelector, prop("handledTodoInfo"));

export const getHandledTodoId = createSelector(getHandledTodoInfo, prop("id"));

export const getHandledTodo = createSelector(
  [getHandledTodoId, getTodos],
  (handledId, todos) => {
    return (
      todos?.find(({ id }) => {
        return id === handledId;
      }) || {}
    );
  }
);

export const getHandledTodoText = createSelector(
  [getHandledTodoId, getTodos],
  (handledId, todos) => {
    console.warn({ handledId });
    const handledTodo = todos?.find(({ id }) => {
      console.info(id);
      return id === handledId;
    });
    console.warn({ handledTodo });
    return handledTodo?.text || null;
  }
);
