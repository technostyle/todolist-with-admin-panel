import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateTodoThunk } from "modules/todos/actions";
import css from "./todo-item.css";
import commonCss from "styles/common.css";
import { setHandledTodoInfoThunk } from "../../modules/ui/actions";

const TodoItemTextElement = ({ label, value }) => (
  <div className={css.todoItemTextElement}>
    <span className={css.todoItemTextElementLabel}>{label}</span>
    <span className={css.todoItemTextElementValue}>{value}</span>
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
      <div className={css.todoCheckboxContainer}>
        <input
          className={css.todoCheckbox}
          type="checkbox"
          ref={checkboxRef}
          checked={isComplete}
          onChange={onToggleComplete}
          disabled={!canEdit}
        />
      </div>
      <div className={css.todoInfoContainer}>
        <TodoItemTextElement label={"name"} value={userName} />
        <TodoItemTextElement label={"email"} value={email} />
        <TodoItemTextElement label={"text"} value={text} />
      </div>
    </div>
  );
};
