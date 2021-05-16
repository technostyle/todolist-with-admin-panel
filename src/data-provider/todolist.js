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
      return await this.httpGet(this.host, {
        ...params,
        ...this.defaultQueryParams,
      });
    } catch (e) {
      throw e;
    }
  };

  postTodo = async (todoItem) => {
    try {
      await this.httpPost({
        url: `${this.host}create`,
        params: todoItem,
        queryParams: this.defaultQueryParams,
      });
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
      await this.httpPost({
        url: `${this.host}edit/:${id}`,
        params: filterEmptyValues({
          text,
          status: getUpdateTodoStatus(text, isComplete),
        }),
        queryParams: this.defaultQueryParams,
      });
    } catch (e) {
      throw e;
    }
  };
}

export const todoListProviderFabric = memoize(
  (dispatch, getState) => new TodolistProvider(dispatch, getState)
);
