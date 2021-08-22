import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoListView from './TodoListView';
import { postTodoList, getTodoList, deleteTodo, completeTodo } from '../../store';


const TodoListContainer = ({ completeTodoHandler, getTodos, deleteTodoHandler, todoList, error, postTodo, isLoading, ...rest }) => {

    const [formData, setFormData] = useState({
        name: '',
        description: ''
    })

    useEffect(() => {
        getTodos()
    }, [])
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        postTodo(formData);
        setFormData(e => {})
    };

    const onChange = ({ target: { name, value } }) => {
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const propsData = {
        todoList,
        error,
        isLoading,
        handleFormSubmit,
        onChange,
        completeTodoHandler,
        deleteTodoHandler,
        ...rest
    }

    return (
        <TodoListView {...propsData}  />
    )
};

const mapStateToProps = ({ isLoading, error, todoList }) => ({
    todoList,
    isLoading,
    error
});

const mapDispatchToProps = (dispatch) => ({
    postTodo: (form) => dispatch(postTodoList(form)),
    getTodos: () => dispatch(getTodoList()),
    deleteTodoHandler: (id) => dispatch(deleteTodo(id)),
    completeTodoHandler: (id, completed) => dispatch(completeTodo(id, completed))
});

TodoListContainer.propTypes = {
    completeTodoHandler: PropTypes.func.isRequired,
    deleteTodoHandler: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        _id: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
    })),
    error: PropTypes.string.isRequired,
    postTodo: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    rest: PropTypes.shape({})
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);