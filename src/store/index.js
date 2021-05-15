import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { todosReducer } from "modules/todos/reducer";
import { paginationReducer } from "modules/pagination/reducer";
import { authReducer } from "modules/auth/reducer";
import { uiReducer } from "modules/ui/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
  pagination: paginationReducer,
  ui: uiReducer,
});

const logger = ({ getState }) => (next) => (action) => {
  console.info(`%c${action.type}`, "font-style: bold; color: blue", getState());
  return next(action);
};

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
