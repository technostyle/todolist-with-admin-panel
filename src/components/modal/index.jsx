import React, { useRef } from "react";
import ReactDOM from "react-dom";

import css from "./modal.css";

const modalParentDomElement = window.document.body;

export const Modal = ({ children, isOpen, onClose }) => {
  const ref = useRef(null);
  const onClickOutside = (event) => {
    event.target === ref.current && onClose();
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div ref={ref} className={css.modalContainer} onClick={onClickOutside}>
          <div className={css.modalContent}>{children}</div>
        </div>,
        modalParentDomElement
      )
    : null;
};
