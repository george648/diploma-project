import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getTodoList,
  deleteTodo,
  completeTodo,
  hideDeletedTodo,
} from 'store/thunkTodo/thunkTodo';
import TodoListView from './TodoListView';


const TodoListContainer = ({
  completeTodoHandler,
  getTodos,
  deleteTodoHandler,
  error,
  deletedName,
  isSuccessfullyDeleted,
  hideDeletedTodoHandler,
}) => {
  useEffect(() => {
    getTodos();
  }, []);

  const propsData = {
    error,
    completeTodoHandler,
    deleteTodoHandler,
    deletedName,
    isSuccessfullyDeleted,
    hideDeletedTodoHandler,
  };

  return <TodoListView {...propsData} />;
};

const mapStateToProps = ({
  errorStore: error,
  toDoListStore: { isSuccessfullyDeleted, deletedTodo },
}) => ({
  isSuccessfullyDeleted,
  deletedName: deletedTodo.name,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  hideDeletedTodoHandler: () => dispatch(hideDeletedTodo()),
  getTodos: () => dispatch(getTodoList()),
  deleteTodoHandler: (id) => dispatch(deleteTodo(id)),
  completeTodoHandler: (id, completed) => dispatch(completeTodo(id, completed)),
});

TodoListContainer.propTypes = {
  hideDeletedTodoHandler: PropTypes.func.isRequired,
  deletedName: PropTypes.string.isRequired,
  isSuccessfullyDeleted: PropTypes.bool.isRequired,
  completeTodoHandler: PropTypes.func.isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
