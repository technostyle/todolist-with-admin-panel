import React, { useRef } from "react";
import ReactDOM from "react-dom";

import css from "./modal.css";

const modalParentDomElement = window.document.body;

export const Modal = ({ children, isOpen, onClose, title, onProceed, onProceedTitle = 'Proceed', onCloseTitle = 'Cancel' }) => {
  const ref = useRef(null);
  const onClickOutside = (event) => {
    event.target === ref.current && onClose();
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div ref={ref} className={css.modalContainer} onClick={onClickOutside}>
          <>
            <div className={css.modalContent}>
              {title && <div className={css.title}>{title}</div>}
              <div className={css.closeButton} onClick={onClose}> &#x2715; </div>
              {children}
              {/*<div className={css.actionContainer}>*/}
              {/*  <div className={css.actionPanel}>*/}
              {/*    {onProceed && <button onClick={onProceed}>{onProceedTitle}</button>}*/}
              {/*    <button onClick={onClose}>{onCloseTitle}</button>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </>
        </div>,
        modalParentDomElement
      )
    : null;
};
