import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { ModalContainer } from "./modal-container";

const modalParentDomElement = window.document.body;

export const Modal = ({ children, isOpen, onClose, title }) => {
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
