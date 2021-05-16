import React, { useEffect } from "react";
import { AddTodoForm } from "./containers/add-todo-form";
import { TodoList } from "./containers/todolist";
import { fetchTodosThunk } from "modules/todos/actions";
import { authentificate } from "modules/auth/actions";
import { useDispatch } from "react-redux";
import { ToolBar } from "./containers/toolbar";
import { Pagination } from "./containers/pagination";
import { LoginPanel } from "./containers/login-panel";
import css from "./app.css";
import { NotificationContainer } from "./components/notification";
import { HandledTodoContainer } from "./containers/handled-todo-container";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authentificate());
    dispatch(fetchTodosThunk());
  }, []);
  return (
    <>
      <div className={css.appContainer}>
        <NotificationContainer />
        <header className={css.header}>
          <h1>Todo app </h1>
          <LoginPanel />
        </header>
        <br />

        <HandledTodoContainer />
        {/* <AddTodoForm /> */}
        <br />
        <ToolBar className={css.appContainer} />
        <br />
        <TodoList className={css.appContainer} />
        <br />
        <Pagination className={css.appContainer} />
      </div>
    </>
  );
};
