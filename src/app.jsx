import React, { useEffect } from "react";
import { AddTodoForm } from "./containers/add-todo-form";
import { TodoList } from "./containers/todolist";
import { fetchTodosThunk } from "modules/todos/actions";
import { useDispatch } from "react-redux";
import { ToolBar } from "./containers/toolbar";
import { Pagination } from "./containers/pagination";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTodosThunk()), []);
  return (
    <div>
      <h1>todo app </h1>
      <br />
      <AddTodoForm />
      <br />
      <ToolBar />
      <br />
      <TodoList />
      <br />
      <Pagination />
    </div>
  );
};
