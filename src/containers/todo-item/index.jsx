import React from "react";
import { useDispatch } from "react-redux";
import { toggleCopmleteThunk, updateTodoThunk } from "modules/todos/actions";
import css from "./todo-item.css";

const TodoItemTextElement = ({ label, value }) => (
  <div className={css.todoItemTextElement}>
    {label}: {value}
  </div>
);

export const TodoItem = ({ todoItem, canComplete }) => {
  const { id, userName, email, text, isComplete } = todoItem;

  const dispatch = useDispatch();
  const onToggleComplete = () => {
    dispatch(updateTodoThunk({ id, isComplete: !isComplete }));
  };
  return (
    <div className={css.todoItemContainer}>
      {canComplete ? (
        <input
          type="checkbox"
          checked={isComplete}
          onChange={onToggleComplete}
        />
      ) : (
        <div>isComplete: {isComplete?.toString()}</div>
      )}
      <TodoItemTextElement label={"userName"} value={userName} />
      <TodoItemTextElement label={"email"} value={email} />
      <TodoItemTextElement label={"text"} value={text} />
    </div>
  );
};
