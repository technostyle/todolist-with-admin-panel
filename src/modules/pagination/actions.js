import { fetchTodosThunk, updateFetchParamsThunk } from "modules/todos/actions";
import { getCurrentPage, getMaxPage } from "./selectors";

const setNewPageThunk = (page) => (dispatch) => {
  dispatch(
    fetchTodosThunk({
      paramsToMerge: { page },
      onSuccess: () => {
        dispatch(updateFetchParamsThunk({ page }));
      },
    })
  );
};

export const incrementPageThunk = () => (dispatch, getState) => {
  const state = getState();
  const currentPage = getCurrentPage(state);
  const maxPage = getMaxPage(state);

  if (currentPage === maxPage) return;
  dispatch(setNewPageThunk(currentPage + 1));
};

export const decrementPageThunk = () => (dispatch, getState) => {
  const state = getState();
  const currentPage = getCurrentPage(state);

  if (currentPage === 1) return;
  dispatch(setNewPageThunk(currentPage - 1));
};
