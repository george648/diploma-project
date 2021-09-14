import PropTypes from 'prop-types';
import { Todos } from '../Todos/Todos';
import { Modal } from '../UI/Modal/ModalWindow';
import TodoForm  from '../TodoForm/TodoForm';

const TodoListView = ({
  completeTodoHandler,
  deleteTodoHandler,
  isLoading,
  deletedName,
  isSuccessfullyDeleted,
  hideDeletedTodoHandler,
  error,
  ...rest
}) => {

  const formPropsData = {
    ...rest,
  };

  const todoListData = {
    ...rest,
    deleteTodoHandler,
    completeTodoHandler,
  };

  return (
    <div>
      <h2>Hey, what's your main focus for today? </h2>
      <TodoForm {...formPropsData} />
      {isLoading ? <span>Loading ...</span> : <Todos {...todoListData} />}
      {isSuccessfullyDeleted && (
        <Modal closeModalWindowBtn={hideDeletedTodoHandler}>
          {`You have just deleted ${deletedName}`}
        </Modal>
      )}
    </div>
  );
};

TodoListView.propTypes = {
  completeTodoHandler: PropTypes.func.isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
  hideDeletedTodoHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  deletedName: PropTypes.string.isRequired,
  isSuccessfullyDeleted: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default TodoListView;