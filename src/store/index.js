import { applyMiddleware, combineReducers, createStore } from "redux";
import { todosReducer } from "modules/todos/reducer";
import { paginationReducer } from "modules/pagination/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos: todosReducer,
  pagination: paginationReducer,
  //   auth: a => a
});

const logger = ({ getState }) => (next) => (action) => {
  console.info(action.type, getState());
  return next(action);
};

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
