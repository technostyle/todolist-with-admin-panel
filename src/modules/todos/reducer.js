import {
  SET_TODOS,
  SET_TODOS_LOADING,
  SET_TOTAL_TODOS_COUNT,
  ADD_TODO,
  TOGGLE_COMPLETE,
  SET_FETCH_PARAMS,
} from "./actions";

const initialState = {
  todos: [],
  isLoading: false,
  totalTodosCount: 0,
  page: 0,
  sortDirection: null,
  sortField: null,
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TODOS:
      return setTodosReducer(state, payload);
    case SET_TODOS_LOADING:
      return setTodosLoadingReducer(state, payload);
    case SET_FETCH_PARAMS:
      return setFetchParamsReducer(state, payload);

    case SET_TOTAL_TODOS_COUNT:
      return setTotalTodosCount(state, payload);
    case ADD_TODO:
      return addTodoReducer(state, payload);
    case TOGGLE_COMPLETE:
      return toggleCompleteReducer(state, payload);

    default:
      return state;
  }
};

function setTodosReducer(state, payload) {
  return { ...state, todos: payload };
}

function setTodosLoadingReducer(state, payload) {
  return { ...state, isLoading: payload };
}

function setFetchParamsReducer(state, { sortField, sortDirection, page }) {
  return {
    ...state,
    sortField: sortField || state.sortField,
    sortDirection: sortDirection || state.sortDirection,
    page: page || state.page,
  };
}

function setTotalTodosCount(state, payload) {
  return { ...state, totalTodosCount: payload };
}

function addTodoReducer(state, payload) {
  return { ...state, todos: state.todos.concat(payload) };
}

function toggleCompleteReducer(state, payload) {
  return {
    ...state,
    todos: state.todos.map((item) =>
      item.id === payload ? { ...item, isCopmlete: !item.isComplete } : item
    ),
  };
}
