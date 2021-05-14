import { httpService } from "api/http-service";
import { HOST } from "api/constants";

class TodolistProvider {
  fetchTodos = async (params) => {
    try {
      return await httpService.get(HOST, {
        ...params,
        developer: "Danila",
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
}

export const todoListProvider = new TodolistProvider();
