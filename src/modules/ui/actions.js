import { getUniqueId } from "utils";

export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const SET_HANDLED_TODO_INFO = "SET_HANDLED_TODO_INFO";

const addNotification = (data) => ({
  type: ADD_NOTIFICATION,
  payload: data,
});

const removeNotification = (id) => ({
  type: REMOVE_NOTIFICATION,
  payload: id,
});

const setHandledTodoInfo = (info) => ({
  type: SET_HANDLED_TODO_INFO,
  payload: info,
});

export const addNotificationThunk = ({
  text,
  type,
  title,
  duration = 5000,
}) => (dispatch) => {
  const id = getUniqueId();
  dispatch(addNotification({ id, text, type, title }));
  const timeout = setTimeout(() => {
    dispatch(removeNotification(id));
    clearTimeout(timeout);
  }, duration);
};

export const setHandledTodoInfoThunk = (id) => (dispatch) => {
  dispatch(setHandledTodoInfo({ id: id || null }));
};
