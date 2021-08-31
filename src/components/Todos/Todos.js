import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { Todo } from './Todo/Todo';

export const Todos = ({
  completeTodoHandler,
  todoList,
  deleteTodoHandler,
  showDeletedTag,
}) => {

  const buttonDeleteHandler = useCallback((id) => {
    deleteTodoHandler(id);
    showDeletedTag();
  }, []);

  const checkHandler = useCallback((id, completed) => {
    completeTodoHandler(id, completed);
  }, []);

  return (
    <ol>
      {todoList.length ? (
        todoList.map(({ name, description, _id, completed }) => (
          <Todo key={_id} name={name} description={description} id={_id} completed={completed} buttonDeleteHandler={buttonDeleteHandler} checkHandler={checkHandler} />
        ))
      ) : (
        <div>there are no todos </div>
      )}
    </ol>
  );
};

Todos.propTypes = {
  completeTodoHandler: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      _id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    }),
  ).isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
  showDeletedTag: PropTypes.func.isRequired,
};