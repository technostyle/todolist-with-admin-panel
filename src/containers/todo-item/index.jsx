import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateTodoThunk } from "modules/todos/actions";
import css from "./todo-item.css";
import commonCss from "styles/common.css";
import { setHandledTodoInfoThunk } from "../../modules/ui/actions";

const TodoItemTextElement = ({ label, value }) => (
  <div className={css.todoItemTextElement}>
    {label}: {value}
  </div>
);

export const TodoItem = ({ todoItem, canEdit }) => {
  const { id, userName, email, text, isComplete } = todoItem;
  const checkboxRef = useRef(null);
  const dispatch = useDispatch();
  const onToggleComplete = () => {
    dispatch(updateTodoThunk({ id, isComplete: !isComplete }));
  };
  const onClick = (event) => {
    if (event.target !== checkboxRef.current) {
      dispatch(setHandledTodoInfoThunk(id));
    }
  };
  return (
    <div
      className={`
    ${css.todoItemContainer}
    ${canEdit ? commonCss.editable : ""}
    `}
      onClick={canEdit ? onClick : undefined}
    >
      {canEdit ? (
        <input
          type="checkbox"
          ref={checkboxRef}
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
