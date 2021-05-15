import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "./actions";
const initialState = {
  notifications: [],
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NOTIFICATION:
      return addNotificationReducer(state, payload);
    case REMOVE_NOTIFICATION:
      return removeNotificationReducer(state, payload);
    default:
      return state;
  }
};

function addNotificationReducer(state, payload) {
  console.log("addNotificationReducer", { payload });
  const newState = {
    ...state,
    notifications: [...state.notifications, payload],
  };
  console.warn({ newState });
  return newState;
}

function removeNotificationReducer(state, payload) {
  return {
    ...state,
    notifications: state.notifications.filter(({ id }) => id !== payload),
  };
}
