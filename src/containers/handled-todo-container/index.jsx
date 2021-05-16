import React, { useEffect, useState } from "react";
import { Modal } from "../../components/modal";
import { AddTodoForm } from "../add-todo-form";
import { useDispatch, useSelector } from "react-redux";
import { getHandledTodo, getHandledTodoId } from "../../modules/ui/selectors";
import { addTodoThunk, updateTodoThunk } from "../../modules/todos/actions";
import { setHandledTodoInfoThunk } from "../../modules/ui/actions";

export const HandledTodoContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handledTodoId = useSelector(getHandledTodoId);
  const initialValues = useSelector(getHandledTodo);

  useEffect(() => setIsModalOpen(Boolean(handledTodoId)), [handledTodoId]);
  const dispatch = useDispatch();
  const cancelTodoHandling = () => dispatch(setHandledTodoInfoThunk(null));
  const onAddTodo = (formValues) => {
    dispatch(
      addTodoThunk({
        ...formValues,
        isComplete: false,
      })
    );
  };

  const onEditTodo = (formValues) => {
    const { text } = formValues || {};
    dispatch(updateTodoThunk({ id: handledTodoId, text }));
  };

  const properHandler = handledTodoId ? onEditTodo : onAddTodo;
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}> add todo </button>
      {
        <Modal
          title={"Todo form"}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            cancelTodoHandling();
          }}
        >
          <AddTodoForm
            onSubmit={properHandler}
            initialValues={initialValues}
            editMode={Boolean(handledTodoId)}
          />
        </Modal>
      }
    </div>
  );
};
