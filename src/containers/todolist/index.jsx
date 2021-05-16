import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, getIsTodosLoading } from "modules/todos/selectors";
import { TodoItem } from "../todo-item";
import css from "./todolist.css";
import { getIsLoggedIn } from "modules/auth/selectors";
import { setHandledTodoInfoThunk } from "../../modules/ui/actions";

export const TodoList = () => {
  const todos = useSelector(getTodos);
  const isLoading = useSelector(getIsTodosLoading);
  const isAdmin = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  if (isLoading) {
    return (
      <div
        className={`
    ${css.loaderContainer}
    `}
      >
        LOADING...
      </div>
    );
  }
  return (
    <div className={css.itemsContainer}>
      {todos.map((todoItem, idx) => (
        <TodoItem
          key={todoItem?.id || idx}
          todoItem={todoItem}
          canEdit={!isLoading && isAdmin}
        />
      ))}
    </div>
  );
};
