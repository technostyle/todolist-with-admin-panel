import React, { useState } from "react";

import css from "./login-form.css";
import commonCss from "styles/common.css";

const FormItem = ({ label, value, onChange, labelId, type }) => {
  return (
    <div className={css.inputElement}>
      <label htmlFor={labelId}>{label}</label>
      <input id={labelId} value={value} onChange={onChange} type={type} />
    </div>
  );
};

export const LoginForm = ({ login }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onUserNameChange = (event) => setUserName(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);
  const onLogin = () => {
    setUserName("");
    setPassword("");
    login();
  };

  const isFormValid = userName && password;

  return (
    <div className={commonCss.centralizedContainer}>
      <div className={css.formContainer}>
        <FormItem
          labelId={"#login-form-user-name-item"}
          label={"userName"}
          value={userName}
          onChange={onUserNameChange}
        />
        <FormItem
          labelId={"#login-form-email-item"}
          label={"password"}
          value={password}
          onChange={onPasswordChange}
          type={"password"}
        />

        <div className={commonCss.centralizedContainer}>
          <button
            disabled={!isFormValid}
            onClick={onLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
