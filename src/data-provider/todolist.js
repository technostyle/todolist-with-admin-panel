import { httpService } from "api/http-service";
import { HOST } from "api/constants";

class TodolistProvider {
  fetchTodos = async (params) => {
    try {
      const { message } = await httpService.get(HOST, {
        ...params,
        developer: "Danila",
      });
      return message;
    } catch (e) {
      console.error(e);
    }

    return [];
  };

  postTodo = async (todoItem) => {
    try {
      await httpService.post(`${HOST}create`, todoItem);
    } catch (e) {
      console.error(e);
    }
  };
}

export const todoListProvider = new TodolistProvider();
