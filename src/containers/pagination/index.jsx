import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPageThunk,
  incrementPageThunk,
} from "modules/pagination/actions";
import {
  getCurrentPage,
  getIsMaxPage,
  getIsMinPage,
} from "modules/pagination/selectors";
import { getIsTodosLoading } from "modules/todos/selectors";
import commonCss from "styles/common.css";
import css from "./pagination.css";
import { LeftArrow, RightArrow } from "../../components/elements";

export const Pagination = () => {
  const currentPage = useSelector(getCurrentPage);
  const isLoading = useSelector(getIsTodosLoading);
  const isMinPage = useSelector(getIsMinPage);
  const isMaxPage = useSelector(getIsMaxPage);
  const dispatch = useDispatch();

  const onPageDecrement = () => dispatch(decrementPageThunk());
  const onPageIncrement = () => dispatch(incrementPageThunk());

  return (
    <div className={commonCss.centralizedContainer}>
      <div className={css.paginationContainer}>
        <button
          className={css.paginationButton}
          disabled={isLoading || isMinPage}
          onClick={onPageDecrement}
        >
          <LeftArrow />
        </button>
        <div className={css.paginationCounter}>{currentPage}</div>
        <button
          className={css.paginationButton}
          disabled={isLoading || isMaxPage}
          onClick={onPageIncrement}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
