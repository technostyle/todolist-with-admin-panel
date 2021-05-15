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

const ToolBartElement = ({ value, onClick, sortDirection }) => {
  let ArrowElement = null;
  if (sortDirection === sortFieldDirections.ASC) ArrowElement = <>&#8593;</>;
  if (sortDirection === sortFieldDirections.DESC) ArrowElement = <>&#8595;</>;

  return (
    <span className={css.toolBarElement} onClick={onClick}>
      {ArrowElement}
      {value}
    </span>
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
