import React from "react";
import css from "./toolbar.css";
import commonCss from "styles/common.css";

const ToolBartElement = ({ value, onClick, sortDirection }) => {
  // let Arrow = () => null;
  // if (sortDirection === 'DESC') Arrow = <span>&#8593;</span>;
  // if (sortDirection === 'ASC') Arrow = <span>&#8595;</span>;

  return (
    <span className={css.toolBarElement} onClick={onClick}>
      &#8593;
      {value}
    </span>
  );
};

export const ToolBar = () => {
  return (
    <div className={commonCss.centralizedContainer}>
      <div className={css.toolBarContainer}>
        <ToolBartElement value={"name"} sortDirection="DESC" />
        <ToolBartElement value={"email"} sortDirection="ASC" />
        <ToolBartElement value={"status"} sortDirection="DESC" />
      </div>
    </div>
  );
};
