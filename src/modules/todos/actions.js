export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const addTodo = (todoItem) => ({
  type: ADD_TODO,
  payload: todoItem,
});

export const toggleComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: id,
});

export const addTodoThunk = (todoItem) => (dispatch) => {
  dispatch(addTodo(todoItem));
};

export const toggleCopmleteThunk = (id) => (dispatch) => {
  dispatch(toggleComplete(id));
};
