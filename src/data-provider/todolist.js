import { httpService } from "api/http-service";
import { HOST } from "api/constants";
import { filterEmptyValues } from "../utils";

const getUpdateTodoStatus = (text, isComplete) => {
  return `${typeof isComplete === "boolean" ? "1" : ""}${
    typeof text === "string" ? 1 : 0
  }`;
};

class TodolistProvider {
  fetchTodos = async (params) => {
    try {
      return await httpService.get(HOST, {
        ...params,
        developer: "Gena",
      });
    } catch (e) {
      console.error(e);
    }

    return [];
  };

  postTodo = async (todoItem) => {
    try {
      await httpService.post(`${HOST}create`, todoItem);
    } catch (e) {
      throw e;
    }
  };

  editTodo = async (token, { id, text, isComplete }) => {
    console.log("editTodo", { id, token, isComplete });
    if (!token) {
      throw new Error("no token provided");
    }
    if (!id) {
      throw new Error("no id provided");
    }
    if (typeof text !== "string" && typeof isComplete !== "boolean") {
      throw new Error("nothin to update");
    }
    try {
      await httpService.post(
        `${HOST}edit/:${id}`,
        filterEmptyValues({
          text,
          status: getUpdateTodoStatus(text, isComplete),
        })
      );
    } catch (e) {
      throw e;
    }
  };
}

export const todoListProvider = new TodolistProvider();
