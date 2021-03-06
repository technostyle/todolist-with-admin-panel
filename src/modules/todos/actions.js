import { todoListProviderFabric } from "data-provider/todolist";
import {
  mapTodoListToClient,
  mapTodoItemToClient,
  mapTodoItemToServer,
  mapSortParamsToServer,
} from "api/mappers";
import { getFetchParams } from "modules/todos/selectors";
import { getAuthToken } from "../auth/selectors";
import { filterEmptyValues, formatErrorMessageObj } from "../../utils";
import { addNotificationThunk, setHandledTodoInfoThunk } from "../ui/actions";
import { sortFieldDirections } from "../toolbar/constants";

export const SET_TODOS = "SET_TODOS";
export const SET_TODOS_LOADING = "SET_TODOS_LOADING";
export const SET_TOTAL_TODOS_COUNT = "SET_TOTAL_TODOS_COUNT";
export const SET_FETCH_PARAMS = "SET_FETCH_PARAMS";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const addTodo = (todoItem) => ({
  type: ADD_TODO,
  payload: todoItem,
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const setTodosLoading = (isLoading) => ({
  type: SET_TODOS_LOADING,
  payload: isLoading,
});

export const setFetchParams = (params) => ({
  type: SET_FETCH_PARAMS,
  payload: params,
});

export const setTotalTodosCount = (count) => ({
  type: SET_TOTAL_TODOS_COUNT,
  payload: count,
});

export const toggleComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: id,
});

export const setFetchParamsThunk = ({ sortField, sortDirection, page }) => (
  dispatch
) => {
  dispatch(setFetchParams({ sortField, sortDirection, page }));
};

// TODO: rename
export const updateFetchParamsThunk = (update) => (dispatch, getState) => {
  const params = getFetchParams(getState());
  dispatch(setFetchParamsThunk({ ...params, ...update }));
};

export const fetchTodosThunk = (config) => async (dispatch, getState) => {
  const { paramsToMerge, onSuccess, onError } = config || {};
  dispatch(setTodosLoading(true));
  const currentParams = getFetchParams(getState());
  const params = paramsToMerge
    ? { ...currentParams, ...paramsToMerge }
    : currentParams;
  const todoListProvider = todoListProviderFabric(dispatch, getState);
  try {
    const rawResponse = await todoListProvider.fetchTodos(
      mapSortParamsToServer(params)
    );
    const { todos, totalTodosCounter } = mapTodoListToClient(rawResponse);
    dispatch(setTodos(todos.map(mapTodoItemToClient)));
    dispatch(setTotalTodosCount(totalTodosCounter));
    onSuccess && onSuccess();
  } catch (e) {
    dispatch(
      addNotificationThunk({
        text: formatErrorMessageObj(e?.message) || "Todos loading error",
        type: "failure",
      })
    );
    onError && onError();
  }

  dispatch(setTodosLoading(false));
};

export const addTodoThunk = (todoItem, onSuccess) => async (
  dispatch,
  getState
) => {
  const todoListProvider = todoListProviderFabric(dispatch, getState);
  try {
    await todoListProvider.postTodo(
      mapTodoItemToServer(filterEmptyValues(todoItem))
    );
    dispatch(
      addNotificationThunk({
        text: "Task successfully created",
        type: "success",
      })
    );
    dispatch(setHandledTodoInfoThunk(null));
    onSuccess();
    dispatch(fetchTodosThunk());
  } catch (e) {
    dispatch(
      addNotificationThunk({
        text: formatErrorMessageObj(e?.message) || "Creating task error",
        type: "failure",
      })
    );
  }
};

export const updateTodoThunk = ({ id, text, isComplete }, onSuccess) => async (
  dispatch,
  getState
) => {
  dispatch(setTodosLoading(true));
  const token = getAuthToken(getState());
  try {
    const todoListProvider = todoListProviderFabric(dispatch, getState);
    await todoListProvider.editTodo(token, { id, text, isComplete });
    dispatch(
      addNotificationThunk({
        text: "Task successfully updated",
        type: "success",
      })
    );
    dispatch(setHandledTodoInfoThunk(null));
    onSuccess();
    dispatch(fetchTodosThunk());
  } catch (e) {
    const serverMessage = formatErrorMessageObj(e?.message);
    if (!serverMessage) {
      console.error(e);
    }
    dispatch(
      addNotificationThunk({
        text: serverMessage || "Error occurred while editing",
        type: "failure",
      })
    );
  }
  dispatch(setTodosLoading(false));
};

export const updateSortParamsThunk = ({
  clickedSortField,
  sortField,
  sortDirection,
}) => (dispatch) => {
  let newFetchParams = {};

  if (sortField === clickedSortField) {
    newFetchParams = {
      sortDirection:
        sortDirection === sortFieldDirections.ASC
          ? sortFieldDirections.DESC
          : sortFieldDirections.ASC,
      page: 1,
    };
  } else {
    newFetchParams = {
      sortField: clickedSortField,
      sortDirection: sortFieldDirections.ASC,
      page: 1,
    };
  }

  dispatch(
    fetchTodosThunk({
      paramsToMerge: newFetchParams,
      onSuccess: () => {
        dispatch(updateFetchParamsThunk(newFetchParams));
      },
    })
  );
};
