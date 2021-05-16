import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoThunk } from "modules/todos/actions";
import { getIsTodosLoading } from "modules/todos/selectors";
import { FormItem } from "../../components/form/form-item";

import commonCss from "styles/common.css";
import css from "./add-todo-form.css";

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
          label={"user name"}
          value={userName}
          onChange={onUserNameChange}
        />
        <FormItem
          labelId={"#email-form-item"}
          label={"e-mail"}
          value={email}
          onChange={onEmailChange}
        />
        <FormItem
          labelId={"#text-form-item"}
          label={"text"}
          value={text}
          onChange={onTextChange}
          inputElType={"textarea"}
        />

        <div className={css.addTodoButtonContainer}>
          <button
            disabled={!isFormValid || isTodolistLoading}
            onClick={onAddTodo}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
