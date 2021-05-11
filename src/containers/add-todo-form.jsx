import React, { useState } from "react";
import { addTodoThunk } from "modules/todos/actions";
import { useDispatch } from "react-redux";

export const AddTodoForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onUserNameChange = (event) => setUserName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onTextChange = (event) => setText(event.target.value);
  const onAddTodo = () => {
    dispatch(
      addTodoThunk({
        userName,
        email,
        text,
        isComplete: false,
      })
    );

    setUserName("");
    setEmail("");
    setText("");
  };

  return (
    <div>
      <div>
        <label>
          <span>UserName</span>
          <input value={userName} onChange={onUserNameChange} />
        </label>
      </div>

      <div>
        <label>
          <span>email</span>
          <input value={email} onChange={onEmailChange} />
        </label>
      </div>

      <div>
        <label>
          <span>text</span>
          <input value={text} onChange={onTextChange} />
        </label>
      </div>

      <div>
        <button onClick={onAddTodo}>addTodo</button>
      </div>
    </div>
  );
};
