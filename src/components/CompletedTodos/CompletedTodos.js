import { useSelector } from 'react-redux';

export const CompletedTodos = () => {
  const todos = useSelector((state) => state.todoList);
  const completedTodos = todos.filter(({ completed }) => completed);

  return <div>Completed todos right now are: {completedTodos.length}</div>;
};
