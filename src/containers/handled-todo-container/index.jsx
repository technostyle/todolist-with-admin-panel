import React, { useCallback, useEffect, useState } from "react";
import { Modal } from "../../components/modal";
import { AddTodoForm } from "../handle-todo-form";
import { useDispatch, useSelector } from "react-redux";
import { getHandledTodo, getHandledTodoId } from "../../modules/ui/selectors";
import { addTodoThunk, updateTodoThunk } from "../../modules/todos/actions";
import { setHandledTodoInfoThunk } from "../../modules/ui/actions";
import css from "./handled-todo-container.css";
import { PlusSign } from "../../components/elements";

export const HandledTodoContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handledTodoId = useSelector(getHandledTodoId);
  const initialValues = useSelector(getHandledTodo);

  useEffect(() => setIsModalOpen(Boolean(handledTodoId)), [handledTodoId]);
  const dispatch = useDispatch();
  const cancelTodoHandling = () => dispatch(setHandledTodoInfoThunk(null));

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const onModalClose = useCallback(() => {
    setIsModalOpen(false);
    cancelTodoHandling();
  }, []);

  const onAddTodo = (formValues) => {
    dispatch(
      addTodoThunk(
        {
          ...formValues,
          isComplete: false,
        },
        onModalClose
      )
    );
  };

  const onEditTodo = (formValues) => {
    const { text } = formValues || {};
    dispatch(updateTodoThunk({ id: handledTodoId, text }, onModalClose));
  };

  const properHandler = handledTodoId ? onEditTodo : onAddTodo;
  return (
    <div className={css.handledTodoContainer}>
      <button className={css.addTodoButton} onClick={openModal}>
        <PlusSign />
      </button>
      {
        <Modal title={"Todo form"} isOpen={isModalOpen} onClose={onModalClose}>
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
