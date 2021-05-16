import React, { forwardRef, useEffect } from "react";
import css from "./modal.css";
import { CloseCross } from "../elements";

export const ModalContainer = forwardRef(
  ({ onClose, onClickOutside, title, children }, ref) => {
    useEffect(() => {
      const onEscapeKeyDown = (event) => event.code === "Escape" && onClose();
      document.addEventListener("keydown", onEscapeKeyDown);
      return () => document.removeEventListener("keydown", onEscapeKeyDown);
    }, []);

    return (
      <div ref={ref} className={css.modalContainer} onClick={onClickOutside}>
        <div className={css.modalContent}>
          {title && <div className={css.title}>{title}</div>}
          <div className={css.closeButton} onClick={onClose}>
            <CloseCross />
          </div>
          {children}
        </div>
      </div>
    );
  }
);

ModalContainer.displayName = "ModalContainer";
