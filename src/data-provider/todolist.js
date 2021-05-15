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
  }

  fetchTodos = async (params) => {
    try {
      return await this.httpService.get(this.host, {
        ...params,
        developer: this.developerName,
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  postTodo = async (todoItem) => {
    try {
      await this.httpService.post(`${this.host}create`, todoItem);
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
      throw new Error("nothing to update");
    }
    try {
      await this.httpService.post(
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
