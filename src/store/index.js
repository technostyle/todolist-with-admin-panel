import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { todosReducer } from "modules/todos/reducer";
import { authReducer } from "modules/auth/reducer";
import { uiReducer } from "modules/ui/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
  ui: uiReducer,
});

const logger = ({ getState }) => (next) => (action) => {
  const { type, payload } = action;
  console.info(
    `%c${type}`,
    "font-style: bold; color: blue",
    { payload },
    getState()
  );
  return next(action);
};

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
