import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, logoutThunk } from "modules/auth/actions";
import { getIsLoggedIn } from "modules/auth/selectors";
import { Modal } from "components/modal";
import { LoginForm } from "./login-form";
import css from "./login-panel.css";

export const LoginPanel = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const handler = () => dispatch(isLoggedIn ? logoutThunk : loginThunk);
  const buttonText = isLoggedIn ? "Logout" : "Login";
  return (
    <div className={css.loginPanelContainer}>
      <button onClick={() => setIsLoginFormOpen((isOpen) => !isOpen)}>
        {buttonText}
      </button>
      {
        <Modal
          isOpen={isLoginFormOpen}
          onClose={() => setIsLoginFormOpen(false)}
        >
          <LoginForm />
        </Modal>
      }
    </div>
  );
};
