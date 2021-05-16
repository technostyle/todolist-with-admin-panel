import React from "react";
import css from "./toolbar.css";
import commonCss from "styles/common.css";
import { useDispatch, useSelector } from "react-redux";
import { getFetchSortParams } from "../../modules/todos/selectors";
import {
  sortFieldNames,
  sortFieldDirections,
} from "../../modules/toolbar/constants";
import { updateSortParamsThunk } from "../../modules/todos/actions";
import { HandledTodoContainer } from "../handled-todo-container";
import { DownArrow, UpArrow } from "../../components/elements";

const ToolBartElement = ({ value, onClick, sortDirection }) => {
  const active = Boolean(sortDirection);
  return (
    <div
      className={`${css.toolBarElement} ${active ? css.active : ""}`}
      onClick={onClick}
    >
      {sortDirection === sortFieldDirections.ASC && <UpArrow />}
      {sortDirection === sortFieldDirections.DESC && <DownArrow />}
      {value}
    </div>
  );
};

export const ToolBar = () => {
  const { sortField, sortDirection } = useSelector(getFetchSortParams) || {};
  const dispatch = useDispatch();
  const updateSortParams = (clickedSortField) => {
    dispatch(
      updateSortParamsThunk({ clickedSortField, sortDirection, sortField })
    );
  };
  return (
    <div className={commonCss.centralizedContainer}>
      <HandledTodoContainer />
      <div className={css.toolBarContainer}>
        <ToolBartElement
          value={sortFieldNames.NAME}
          sortDirection={
            (sortField === sortFieldNames.NAME && sortDirection) || null
          }
          onClick={() => updateSortParams(sortFieldNames.NAME)}
        />
        <ToolBartElement
          value={sortFieldNames.EMAIL}
          sortDirection={
            (sortField === sortFieldNames.EMAIL && sortDirection) || null
          }
          onClick={() => updateSortParams(sortFieldNames.EMAIL)}
        />
        <ToolBartElement
          value={sortFieldNames.STATUS}
          sortDirection={
            (sortField === sortFieldNames.STATUS && sortDirection) || null
          }
          onClick={() => updateSortParams(sortFieldNames.STATUS)}
        />
      </div>
    </div>
  );
};
