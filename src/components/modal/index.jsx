import React, { useEffect, useRef, forwardRef } from "react";
import ReactDOM from "react-dom";
import { CloseCross } from "components/elements";
import css from "./modal.css";

const modalParentDomElement = window.document.body;

const ModalContainer = forwardRef(
  ({ onClose, onClickOutside, title, children }, ref) => {
    useEffect(() => {
      const onEscapePush = (event) =>
        console.log(event, event.code) ||
        (event.code === "Escape" && onClose());
      document.addEventListener("keydown", onEscapePush);
      return () => document.removeEventListener("keydown", onEscapePush);
    }, []);

    return (
      <div ref={ref} className={css.modalContainer} onClick={onClickOutside}>
        <>
          <div className={css.modalContent}>
            {title && <div className={css.title}>{title}</div>}
            <div className={css.closeButton} onClick={onClose}>
              <CloseCross />
            </div>
            {children}
            {/* <div className={css.actionContainer}> */}
            {/*  <div className={css.actionPanel}> */}
            {/*    {onProceed && <button onClick={onProceed}>{onProceedTitle}</button>} */}
            {/*    <button onClick={onClose}>{onCloseTitle}</button> */}
            {/*  </div> */}
            {/* </div> */}
          </div>
        </>
      </div>
    );
  }
);

ModalContainer.displayName = "ModalContainer";

export const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  onProceed,
  onProceedTitle = "Proceed",
  onCloseTitle = "Cancel",
}) => {
  const ref = useRef(null);

  const onClickOutside = (event) => {
    event.target === ref.current && onClose();
  };

  return isOpen
    ? ReactDOM.createPortal(
        <ModalContainer
          ref={ref}
          onClose={onClose}
          onClickOutside={onClickOutside}
          title={title}
        >
          {children}
        </ModalContainer>,
        modalParentDomElement
      )
    : null;
};
