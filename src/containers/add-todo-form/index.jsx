import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoThunk } from "modules/todos/actions";
import { getIsTodosLoading } from "modules/todos/selectors";

import commonCss from "styles/common.css";
import css from "./add-todo-form.css";

const FormItem = ({ label, value, onChange, labelId }) => {
  return (
    <div className={css.inputElement}>
      <label htmlFor={labelId}>{label}</label>
      <input id={labelId} value={value} onChange={onChange} />
    </div>
  );
};

export const AddTodoForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const isTodolistLoading = useSelector(getIsTodosLoading);
  const onUserNameChange = (event) => setUserName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onTextChange = (event) => setText(event.target.value);
  const onAddTodo = () => {
    dispatch(
      addTodoThunk({
        userName,
        email,
        text,
        isComplete: false,
      })
    );

    setUserName("");
    setEmail("");
    setText("");
  };

  const isFormValid = userName && email && text;

  return (
    <div className={commonCss.centralizedContainer}>
      <div className={css.formContainer}>
        <FormItem
          labelId={"#user-name-form-item"}
          label={"userName"}
          value={userName}
          onChange={onUserNameChange}
        />
        <FormItem
          labelId={"#email-form-item"}
          label={"email"}
          value={email}
          onChange={onEmailChange}
        />
        <FormItem
          labelId={"#text-form-item"}
          label={"text"}
          value={text}
          onChange={onTextChange}
        />

        <div className={css.addTodoButtonContainer}>
          <button
            disabled={!isFormValid || isTodolistLoading}
            onClick={onAddTodo}
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
};
