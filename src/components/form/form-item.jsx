import React from "react";
import css from "./form-item.css";

export const FormItem = React.forwardRef(
  ({ type, label, value, onChange, labelId, inputElType }, ref) => {
    const InputElement = ["input", "textarea"].includes(inputElType)
      ? inputElType
      : "input";
    return (
      <div className={css.inputElementWrapper}>
        <label htmlFor={labelId}>{label}</label>
        <InputElement
          ref={ref}
          type={type}
          className={css.inputElement}
          id={labelId}
          value={value}
          onChange={onChange}
          rows={InputElement === "textarea" ? 4 : null}
        />
      </div>
    );
  }
);

FormItem.displayName = "FormItem";
