import { ADD_TODO, TOGGLE_COMPLETE } from "./actions";

const intialState = {
  todos: [],
};

export const todosReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return addTodoReducer(state, payload);
    case TOGGLE_COMPLETE:
      return toggleCompleteReducer(state, payload);
    default:
      return state;
  }
};

function addTodoReducer(state, payload) {
  return { ...state, todos: state.todos.concat(payload) };
}

function toggleCompleteReducer(state, payload) {
  return {
    ...state,
    todos: todos.map((item) =>
      item.id === payload ? { ...item, isCopmlete: !item.isComplete } : item
    ),
  };
}
