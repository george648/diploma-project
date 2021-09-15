import PropTypes from 'prop-types';
import { Todo } from './Todo/Todo';
import { todoListPropType } from '../propTypes/propTypes'

export const Todos = ({
  completeTodoHandler,
  todoList,
  deleteTodoHandler,
}) => (
  <ol>
    {todoList.length ? (
      todoList.map(({ name, description, _id, completed }) => (
        <Todo
          key={_id}
          name={name}
          description={description}
          id={_id}
          completed={completed}
          deleteTodoHandler={deleteTodoHandler}
          completeTodoHandler={completeTodoHandler} />
      ))
    ) : (
      <div>there are no todos </div>
    )}
  </ol>
);


Todos.propTypes = {
  completeTodoHandler: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(todoListPropType).isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
};