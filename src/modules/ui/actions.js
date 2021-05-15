import { getUniqueId } from "utils";

export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

const addNotification = (data) => ({
  type: ADD_NOTIFICATION,
  payload: data,
});

const removeNotification = (id) => ({
  type: REMOVE_NOTIFICATION,
  payload: id,
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
