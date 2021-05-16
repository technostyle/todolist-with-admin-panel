import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, logoutThunk } from "modules/auth/actions";
import {
  getIsAuthLoading,
  getIsLoggedIn,
  getLoginErrorMessage,
} from "modules/auth/selectors";
import { Modal } from "components/modal";
import { LoginForm } from "./login-form";
import css from "./login-panel.css";

export const LoginPanel = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const loginErrorMessage = useSelector(getLoginErrorMessage);
  const isAuthLoading = useSelector(getIsAuthLoading);
  useEffect(() => isLoggedIn && setIsLoginFormOpen(false), [isLoggedIn]);
  const dispatch = useDispatch();
  const onLogin = async (creds) => {
    dispatch(loginThunk(creds));
  };

  const onLogout = () => dispatch(logoutThunk());
  const handleAuthButton = () =>
    isLoggedIn ? onLogout() : setIsLoginFormOpen(true);
  const buttonText = isLoggedIn ? "Logout" : "Login";
  return (
    <div className={css.loginPanelContainer}>
      <button onClick={handleAuthButton}>{buttonText}</button>
      {
        <Modal
          title={'Login form'}
          isOpen={isLoginFormOpen}
          onClose={() => {
            setIsLoginFormOpen(false);
          }}
        >
          <LoginForm
            isLoading={isAuthLoading}
            onLogin={onLogin}
            errorMessage={loginErrorMessage}
          />
        </Modal>
      }
    </div>
  );
};
