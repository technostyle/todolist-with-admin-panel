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
    const handledTodo = todos?.find(({ id }) => {
      return id === handledId;
    });
    return handledTodo?.text || null;
  }
);
