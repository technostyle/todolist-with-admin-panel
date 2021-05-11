import React from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../modules/todos/selectors";
import { TodoItem } from "./todo-item";

export const TodoList = () => {
  const todos = useSelector(getTodos);
  const canComplete = true;
  //   const canCopmlete = useSelector(isAdmin);

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
