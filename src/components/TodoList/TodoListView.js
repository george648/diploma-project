import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Todos } from '../Todos/Todos';
import { Modal } from '../UI/Modal/ModalWindow';
import TodoForm from '../TodoForm/TodoForm';
import { todoListPropType } from '../propTypes/propTypes';

const TodoListView = ({
  completeTodoHandler,
  deleteTodoHandler,
  isLoading,
  deletedName,
  isSuccessfullyDeleted,
  hideDeletedTodoHandler,
  error,
  todoList,
  ...rest
}) => {
  const todoListData = {
    todoList,
    ...rest,
    deleteTodoHandler,
    completeTodoHandler,
  };

  return (
    <div>
      <h2>Hey, what's your main focus for today? </h2>
      <TodoForm />
      {isLoading ? <span>Loading ...</span> : <Todos {...todoListData} />}
      {isSuccessfullyDeleted && (
        <Modal onCloseButtonClick={hideDeletedTodoHandler}>
          {`You have just deleted ${deletedName}`}
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = ({ isLoading, toDoListStore: { todoList } }) => ({
  isLoading,
  todoList,
});

TodoListView.propTypes = {
  completeTodoHandler: PropTypes.func.isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
  hideDeletedTodoHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  deletedName: PropTypes.string.isRequired,
  isSuccessfullyDeleted: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(todoListPropType).isRequired,
};

export default connect(mapStateToProps, null)(TodoListView);
