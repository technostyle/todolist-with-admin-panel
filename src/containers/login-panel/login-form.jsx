import React, { useEffect, useRef, useState } from "react";

import css from "./login-form.css";
import commonCss from "styles/common.css";
import { FormItem } from "../../components/form/form-item";

export const LoginForm = ({ isLoading, onLogin, errorMessage }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const loginInputRef = useRef(null);
  useEffect(() => loginInputRef.current.focus(), []);

  const onUserNameChange = (event) => setUserName(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);
  const loginHandler = () => {
    onLogin({
      userName,
      password,
    });
  };

  const isFormValid = userName && password;

  return (
    <div className={commonCss.centralizedContainer}>
      <div className={css.formContainer}>
        <FormItem
          ref={loginInputRef}
          disabled={isLoading}
          labelId={"#login-form-user-name-item"}
          label={"userName"}
          value={userName}
          onChange={onUserNameChange}
        />
        <FormItem
          disabled={isLoading}
          labelId={"#login-form-email-item"}
          label={"password"}
          value={password}
          onChange={onPasswordChange}
          type={"password"}
        />

        {errorMessage && <div className={css.errorMessage}>{errorMessage}</div>}
        <div className={css.loginButtonContainer}>
          <button disabled={!isFormValid || isLoading} onClick={loginHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
