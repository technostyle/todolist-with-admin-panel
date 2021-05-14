const mapTotalTodosCounter = (todoList) => {
  if (todoList?.total_task_count) return Number(todoList?.total_task_count);
  return todoList?.tasks?.length || 0;
};

export const mapTodoListToClient = (todoList) => ({
  todos: todoList?.tasks || [],
  totalTodosCounter: mapTotalTodosCounter(todoList),
});

export const mapTodoItemToClient = (todoItem) => ({
  id: todoItem?.id,
  userName: todoItem?.username,
  email: todoItem?.email,
  text: todoItem?.text,
  isComplete: Boolean(todoItem?.status),
});

export const mapTodoItemToServer = (todoItem) => ({
  id: todoItem?.id,
  username: todoItem?.userName,
  email: todoItem?.email,
  text: todoItem?.text,
  status: todoItem?.isComplete ? 1 : 0,
});

export const mapAuthCredsToServer = (creds) => ({
  username: creds?.userName,
  password: creds?.password,
});
