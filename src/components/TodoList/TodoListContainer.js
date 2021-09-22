import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoListView from './TodoListView';
import { todoListPropType } from '../propTypes/propTypes';
import {
  getTodoList,
  deleteTodo,
  completeTodo,
  hideDeletedTodo,
} from '../../store/thunkTodo/thunkTodo';

const TodoListContainer = ( props, {
  completeTodoHandler,
  getTodos,
  deleteTodoHandler,
  todoList,
  error,
  isLoading,
  deletedName,
  isSuccessfullyDeleted,
  hideDeletedTodoHandler,
}) => {
  useEffect(() => {
    getTodos();
  }, []);

  const propsData = {
    todoList,
    error,
    isLoading,
    completeTodoHandler,
    deleteTodoHandler,
    deletedName,
    isSuccessfullyDeleted,
    hideDeletedTodoHandler,
  };

  return <TodoListView {...propsData} />;
};

const mapStateToProps = ({ isLoading, error, todoList, deletedTodo, isSuccessfullyDeleted }) => ({
  isSuccessfullyDeleted,
  deletedName: deletedTodo.name,
  todoList,
  isLoading,
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
  todoList: PropTypes.arrayOf(todoListPropType).isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);