import React, { useEffect } from "react";
import { TodoList } from "./containers/todolist";
import { fetchTodosThunk } from "modules/todos/actions";
import { authentificate } from "modules/auth/actions";
import { useDispatch } from "react-redux";
import { ToolBar } from "./containers/toolbar";
import { Pagination } from "./containers/pagination";
import { LoginPanel } from "./containers/login-panel";
import css from "./app.css";
import { NotificationContainer } from "./components/notification";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authentificate());
    dispatch(fetchTodosThunk());
  }, []);
  return (
    <div className={css.appContainer}>
      <header className={css.header}>
        <h1 className={css.headerTitle}>Todo app </h1>
        <LoginPanel />
      </header>

      <ToolBar />
      <TodoList />
      <Pagination />
      <NotificationContainer />
    </div>
  );
};
