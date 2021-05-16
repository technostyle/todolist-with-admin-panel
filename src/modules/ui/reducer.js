import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SET_HANDLED_TODO_INFO,
} from "./actions";
const initialState = {
  notifications: [],
  handledTodoInfo: null,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NOTIFICATION:
      return addNotificationReducer(state, payload);
    case REMOVE_NOTIFICATION:
      return removeNotificationReducer(state, payload);
    case SET_HANDLED_TODO_INFO:
      return setHandledTodoInfoReducer(state, payload);
    default:
      return state;
  }
};

function addNotificationReducer(state, payload) {
  return {
    ...state,
    notifications: [...state.notifications, payload],
  };
}

function removeNotificationReducer(state, payload) {
  return {
    ...state,
    notifications: state.notifications.filter(({ id }) => id !== payload),
  };
}

function setHandledTodoInfoReducer(state, payload) {
  return {
    ...state,
    handledTodoInfo: payload,
  };
}
