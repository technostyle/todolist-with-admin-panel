import React from "react";
import { AddTodoForm } from "./containers/add-todo-form";
import { TodoList } from "./containers/todolist";

export const App = () => (
  <div>
    <h1>todo app </h1>
    <AddTodoForm />
    <TodoList />
  </div>
);
