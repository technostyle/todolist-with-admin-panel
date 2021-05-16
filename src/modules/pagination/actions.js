import { fetchTodosThunk, updateFetchParamsThunk } from "modules/todos/actions";
import { getCurrentPage, getMaxPage } from "./selectors";
export const SET_PAGE = "SET_PAGE";

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const incrementPageThunk = () => (dispatch, getState) => {
  const state = getState();
  const currentPage = getCurrentPage(state);
  const maxPage = getMaxPage(state);

  if (currentPage === maxPage) return;
  const newPage = currentPage + 1;
  // TODO filters reducer
  dispatch(updateFetchParamsThunk({ page: newPage }));
  dispatch(fetchTodosThunk());
  dispatch(setPage(newPage));
};

export const decrementPageThunk = () => (dispatch, getState) => {
  const state = getState();
  const currentPage = getCurrentPage(state);

  if (currentPage === 1) return;
  const newPage = currentPage - 1;
  // TODO filters reducer

  dispatch(updateFetchParamsThunk({ page: newPage }));
  dispatch(
    fetchTodosThunk({
      paramsToMerge: { page: newPage },
      onSuccess: () => dispatch(setPage(newPage)),
    })
  );
};
