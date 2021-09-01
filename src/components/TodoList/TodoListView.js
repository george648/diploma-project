import PropTypes from 'prop-types';
import { useState } from 'react';
import { Todos } from '../Todos/Todos';
import { Modal } from '../UI/Modal/ModalWindow';
import { TodoForm } from '../TodoForm/TodoForm';
import { todoListPropType } from '../propTypes/propTypes';

const TodoListView = ({
  completeTodoHandler,
  deleteTodoHandler,
  isLoading,
  ...rest
}) => {
  const [formStatus, setFormStatus] = useState(false);
  const closeModalWindowBtn = () => setFormStatus(false);
  const showDeletedTag = () => setFormStatus(true);
  
  const formPropsData = {
    isLoading,
    ...rest,
  };

  const todoListData = {
    ...rest,
    showDeletedTag,
    deleteTodoHandler,
    completeTodoHandler,
  };

  return (
    <div>
      <h2>Hey, what's your main focus for today? </h2>
      <TodoForm {...formPropsData} />
      {isLoading && <span>Loading ...</span>}
      {!isLoading && <Todos {...todoListData} />}
      {formStatus && (
        <Modal closeModalWindowBtn={closeModalWindowBtn}>
          You have just deleted "todo"
        </Modal>
      )}
    </div>
  );
};

TodoListView.propTypes = {
  completeTodoHandler: PropTypes.func.isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  rest: PropTypes.shape({
    error: PropTypes.string.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    onChangeDescription: PropTypes.func.isRequired,
    onChangeName: PropTypes.func.isRequired,
    todoList: todoListPropType.isRequired,
  }).isRequired,
};

export default TodoListView;