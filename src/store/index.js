import { applyMiddleware, combineReducers, createStore } from "redux";
import { todosReducer } from "modules/todos/reducer";
import { paginationReducer } from "modules/pagination/reducer";
import { authReducer } from "modules/auth/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos: todosReducer,
  pagination: paginationReducer,
  auth: authReducer,
});

const logger = ({ getState }) => (next) => (action) => {
  console.info(`%c${action.type}`, "font-style: bold; color: blue", getState());
  return next(action);
};

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
