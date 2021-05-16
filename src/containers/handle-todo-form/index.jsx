import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getIsTodosLoading } from "modules/todos/selectors";
import { FormItem } from "components/form/form-item";

import commonCss from "styles/common.css";
import css from "./handle-todo-form.css";

export const AddTodoForm = ({ onSubmit, initialValues, editMode }) => {
  const { text: initialText, email: initialEmail, userName: initialUserName } =
    initialValues || {};
  const [userName, setUserName] = useState(initialUserName || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [text, setText] = useState(initialText || "");

  const isTodolistLoading = useSelector(getIsTodosLoading);
  const onUserNameChange = (event) => setUserName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onTextChange = (event) => setText(event.target.value);
  const handleSubmit = () => {
    onSubmit({ userName, email, text });
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
          disabled={editMode}
        />
        <FormItem
          labelId={"#email-form-item"}
          label={"e-mail"}
          value={email}
          onChange={onEmailChange}
          disabled={editMode}
        />
        <FormItem
          labelId={"#text-form-item"}
          label={"text"}
          value={text}
          onChange={onTextChange}
          inputElType={"textarea"}
        />

        <div className={css.submitButtonContainer}>
          <button
            className={css.submitButton}
            disabled={!isFormValid || isTodolistLoading}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
