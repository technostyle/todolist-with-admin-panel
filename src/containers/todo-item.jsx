import React from "react";
import { useDispatch } from "react-redux";
import { toggleCopmleteThunk } from "modules/todos/actions";

export const TodoItem = ({ todoItem, canComplete }) => {
  const { id, userName, email, text, isComplete } = todoItem;
  const dispatch = useDispatch();
  const onTogleComplete = () => dispatch(toggleCopmleteThunk(id));
  return (
    <div>
      <div>userName: {userName}</div>
      <div>eMail: {email}</div>
      <div>text: {text}</div>
      {canComplete ? (
        <div onClick={onTogleComplete}>isComplete: {isComplete}</div>
      ) : (
        <div>isComplete: {isComplete}</div>
      )}
    </div>
  );
};
