import React from "react";
import { useSelector } from "react-redux";
import { getTodos, getIsTodosLoading } from "modules/todos/selectors";

import { TodoItem } from "./todo-item";

export const TodoList = () => {
  const todos = useSelector(getTodos);
  const isLoading = useSelector(getIsTodosLoading);
  const canComplete = true;

  if (isLoading) return <div>LOADING...</div>;
  return (
    <div>
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
