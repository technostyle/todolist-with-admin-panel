import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPageThunk,
  incrementPageThunk,
} from "modules/pagination/actions";
import { getCurrentPage } from "modules/pagination/selectors";
import { getIsTodosLoading } from "modules/todos/selectors";
import commonCss from "styles/common.css";

export const Pagination = () => {
  const currentPage = useSelector(getCurrentPage);
  const isLoading = useSelector(getIsTodosLoading);
  const dispatch = useDispatch();

  const onPageDecrement = () => dispatch(decrementPageThunk());
  const onPageIncrement = () => dispatch(incrementPageThunk());

  return (
    <div className={commonCss.centralizedContainer}>
      <div>
        <button
          className={commonCss.button}
          disabled={isLoading}
          onClick={onPageDecrement}
        >
          prev
        </button>
        <span>{currentPage}</span>
        <button
          className={commonCss.button}
          disabled={isLoading}
          onClick={onPageIncrement}
        >
          next
        </button>
      </div>
    </div>
  );
};
