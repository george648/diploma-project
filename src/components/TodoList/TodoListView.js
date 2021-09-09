import PropTypes from 'prop-types';
import { Todos } from '../Todos/Todos';
import { Modal } from '../UI/Modal/ModalWindow';
import { TodoForm } from '../TodoForm/TodoForm';
import { todoListPropType } from '../propTypes/propTypes';

const TodoListView = ({
  completeTodoHandler,
  deleteTodoHandler,
  isLoading,
  formData,
  deletedName,
  isSuccessfullyDeleted,
  hideDeletedTodoHandler,
  error,
  handleFormSubmit,
  onChangeDescription,
  onChangeName,
  ...rest
}) => {

  console.log(rest)
 
  const formPropsData = {
    isLoading,
    formData,
    onChangeName,
    onChangeDescription,
    handleFormSubmit,
    error,
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
        <Modal closeModalWindowBtn={ hideDeletedTodoHandler}>
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
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  deletedName: PropTypes.string.isRequired,
  isSuccessfullyDeleted: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  rest: PropTypes.shape({
    todoList: todoListPropType.isRequired,
  }).isRequired,
};

export default TodoListView;