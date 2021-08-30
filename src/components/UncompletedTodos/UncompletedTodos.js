import { useSelector } from 'react-redux';

export const UncompletedTodos = () => {
  const todos = useSelector((state) => state.todoList);
  const uncompletedTodos = todos.filter(({ completed }) => !completed);

  return <div>UncompletedTodos: {uncompletedTodos.length}</div>;
};
