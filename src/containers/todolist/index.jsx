import React from "react";
import { useSelector } from "react-redux";
import { getTodos, getIsTodosLoading } from "modules/todos/selectors";
import { TodoItem } from "../todo-item";
import css from "styles/common.css";
import { getIsLoggedIn } from "modules/auth/selectors";

export const TodoList = () => {
  const todos = useSelector(getTodos);
  const isLoading = useSelector(getIsTodosLoading);
  const canComplete = useSelector(getIsLoggedIn);

  if (isLoading) {
    return <div className={css.centralizedContainer}>LOADING...</div>;
  }
  return (
    <div className={css.centralizedContainer}>
      {todos.map((todoItem, idx) => (
        <TodoItem
          key={todoItem?.id || idx}
          todoItem={todoItem}
          canComplete={canComplete}
        />
      ))}
    </div>
  );
};
