import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, logoutThunk } from "../modules/auth/actions";
import { getIsLoggedIn } from "../modules/auth/selectors";
import css from "./login-panel.css";

export const LoginPanel = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const handler = () => dispatch(isLoggedIn ? logoutThunk : loginThunk);
  const buttonText = isLoggedIn ? "Logout" : "Login";
  return (
    <div className={css.loginPanelContainer}>
      <button className={css.loginButton} onClick={handler}>
        {buttonText}
      </button>
    </div>
  );
};
