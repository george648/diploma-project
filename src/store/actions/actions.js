import { SET_TODO_SUCCESS, SET_TODO_ERROR, DELETE_TODO_SUCCESS, DELETE_TODO_ERROR, LOADING, GET_TODO_LIST_SUCCESS, COMPLETE_TODO_SUCCESS, COMPLETE_TODO_ERROR, GET_TODO_LIST_ERROR } from './../types/types';

export const setLoading = () => ({
    type: LOADING
});

export const postTodoSuccess = (todo) => ({
    type: SET_TODO_SUCCESS,
    payload: todo
});

export const deleteTodoSuccess = (todoId) => ({
    type: DELETE_TODO_SUCCESS,
    payload: todoId
});

export const deleteTodoError = (error) => ({
    type: DELETE_TODO_ERROR,
    payload: error
});

export const postTodoError = (error) => ({
    type: SET_TODO_ERROR,
    payload: error
});

export const getTodoListSuccess = (todoList) => ({
    type: GET_TODO_LIST_SUCCESS,
    payload: todoList
});

export const getTodoListError = (error) => ({
    type: GET_TODO_LIST_ERROR,
    payload: error
});

export const completeTodoError = (error) => ({
    type: COMPLETE_TODO_ERROR,
    payload: error
});

export const completeTodoSuccess = (todoItem) => ({
    type: COMPLETE_TODO_SUCCESS,
    payload: todoItem
});