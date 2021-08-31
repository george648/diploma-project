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
} from '../../store';

const TodoListContainer = ({
  completeTodoHandler,
  getTodos,
  deleteTodoHandler,
  todoList,
  error,
  postTodo,
  isLoading,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  // const [todoName, setTodoName] = useState('');
  // const [todoDescription, setTodoDescription] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postTodo(formData);
    setFormData(() => {});
  };

  const onChange = ({ target: { name, value } }) => {
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
    onChange,
    completeTodoHandler,
    deleteTodoHandler,
  };

  return <TodoListView {...propsData} />;
};

const mapStateToProps = ({ isLoading, error, todoList }) => ({
  todoList,
  isLoading,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  postTodo: (form) => dispatch(postTodoList(form)),
  getTodos: () => dispatch(getTodoList()),
  deleteTodoHandler: (id) => dispatch(deleteTodo(id)),
  completeTodoHandler: (id, completed) => dispatch(completeTodo(id, completed)),
});

TodoListContainer.propTypes = {
  completeTodoHandler: PropTypes.func.isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(todoListPropType).isRequired,
  error: PropTypes.string.isRequired,
  postTodo: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
