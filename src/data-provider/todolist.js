import { httpService } from "api/http-service";
import { filterEmptyValues, memoize } from "../utils";
import { DataProvider } from "./data-provider";

const getUpdateTodoStatus = (text, isComplete) => {
  return `${typeof isComplete === "boolean" ? "1" : ""}${
    typeof text === "string" ? 1 : 0
  }`;
};

class TodolistProvider extends DataProvider {
  constructor(dispatch, getState) {
    super(dispatch, getState, "TodolistProvider");
    console.log(this.host);
  }

  fetchTodos = async (params) => {
    try {
      return await httpService.get(this.host, {
        ...params,
        developer: this.developerName,
      });
    } catch (e) {
      console.error(e);
    }

    return [];
  };

  postTodo = async (todoItem) => {
    try {
      await httpService.post(`${this.host}create`, todoItem);
    } catch (e) {
      throw e;
    }
  };

  editTodo = async (token, { id, text, isComplete }) => {
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
        `${this.host}edit/:${id}`,
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

export const todoListProviderFabric = memoize(
  (dispatch, getState) => new TodolistProvider(dispatch, getState)
);
