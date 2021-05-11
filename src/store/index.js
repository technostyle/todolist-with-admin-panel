import { applyMiddleware, combineReducers, createStore } from "redux";
import { todosReducer } from "modules/todos/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos: todosReducer,
  //   auth: a => a
});

const logger = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
