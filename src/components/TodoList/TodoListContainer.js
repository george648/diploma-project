import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoListView from './TodoListView';
import { todoListPropType } from '../propTypes/propTypes';
import {
  postTodoList,
  getTodoList,
  deleteTodo,
  completeTodo,
  hideDeletedTodo,
} from '../../store';

const INITIAL_FORM_DATA = {
  name: '',
  description: '',
};

const TodoListContainer = ({
  completeTodoHandler,
  getTodos,
  deleteTodoHandler,
  todoList,
  error,
  postTodo,
  isLoading,
  deletedName,
  isSuccessfullyDeleted,
  hideDeletedTodoHandler,
}) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  useEffect(() => {
    getTodos();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postTodo(formData);
    setFormData(() => (INITIAL_FORM_DATA));
  };

  const onChangeName = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onChangeDescription = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const propsData = {
    todoList,
    error,
    isLoading,
    handleFormSubmit,
    onChangeDescription,
    onChangeName,
    completeTodoHandler,
    deleteTodoHandler,
    formData,
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
  postTodo: (form) => dispatch(postTodoList(form)),
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
  postTodo: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);