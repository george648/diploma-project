import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { token } from './constants/token';
import { API_URL } from './constants/Api';

const initialState = {
    user: {},
    isLoading: false,
    todoList: [],
    error: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TODO_SUCCESS':
            return {...state, todoList: [...state.todoList, action.payload], isLoading: false, error: initialState.error}
        case 'SET_TODO_ERROR':
            return {...state, error: action.payload, todoList: state.todoList, isLoading: false}
        case 'DELETE_TODO_SUCCESS': 
            return {...state, isLoading:false, todoList: state.todoList.filter(({_id})=> _id !== action.payload)}
        case 'DELETE_TODO_ERROR': 
            return { ...state, isLoading: false, error:action.payload, todoList: initialState.todoList}
        case 'LOADING':
            return {...state, isLoading: true}
        case 'GET_TODO_LIST_SUCCESS': 
            return {...state, isLoading: false, todoList: action.payload, error: initialState.error}
        case 'COMPLETE_TODO_SUCCESS':
            return { ...state, isLoading: false, todoList: state.todoList.map((todo) => {
                if (todo._id === action.payload._id) {
                    todo.completed = action.payload.completed
                }
                return todo
            }) }
        case 'COMPLETE_TODO_ERROR':
            return { ...state, isLoading: false, error: action.payload}
        case 'GET_TODO_LIST_ERROR': 
            return {...state, isLoading: false, error: action.payload, todoList: initialState.todoList}
        default:
            return state
    }
};

export const setLoading = () => ({
    type: 'LOADING'
});

export const postTodoSuccess = (todo) => ({
    type: 'SET_TODO_SUCCESS',
    payload: todo
});

export const deleteTodoSuccess = (todoId) => ({
    type: 'DELETE_TODO_SUCCESS',
    payload: todoId
});

export const deleteTodoError = (error) => ({
    type: 'DELETE_TODO_ERROR',
    payload: error
});

export const postTodoError = (error) => ({
    type: 'SET_TODO_ERROR',
    payload: error
});

export const getTodoListSuccess = (todoList) => ({
    type: 'GET_TODO_LIST_SUCCESS',
    payload: todoList
});

export const getTodoListError = (error) => ({
    type: 'GET_TODO_LIST_ERROR',
    payload: error
});

export const completeTodoError = (error) => ({
    type: 'COMPLETE_TODO_ERROR',
    payload: error
});

export const completeTodoSuccess = (todoItem) => ({
    type: 'COMPLETE_TODO_SUCCESS',
    payload: todoItem
});

export const postTodoList = body => dispatch => fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-type' : 'application/json; charset=utf-8',
    },
    body: JSON.stringify(body)
})
.then(dispatch(setLoading()))
.then(data => data.json())
.then(response => {
    if (!response.message) {
        dispatch(postTodoSuccess(response))
    } else {
        dispatch(postTodoError(response.message))
    }
})
.catch(error => dispatch(postTodoError(error)));

export const getTodoList = () => dispatch => fetch(`${API_URL}/tasks`, {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`,
    }
})
.then(dispatch(setLoading()))
.then(response => response.json())
.then(data => {
    dispatch(getTodoListSuccess(data))
})
.catch(error => {
    getTodoListError(error)
});

export const deleteTodo = (id) => dispatch => fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE',
    headers: {
        Authorization: `Bearer ${token}`,
    }
})
.then((response) => response.json())
.then(dispatch(deleteTodoSuccess(id)))
.catch((error)=> dispatch(deleteTodoError(error)));

export const completeTodo = (id, completed) => dispatch => fetch(`${API_URL}/tasks/${id}`, {
    method: 'PATCH',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({completed})
})
.then(response => response.json())
.then((data) => dispatch(completeTodoSuccess(data)))
.catch((error) => dispatch(completeTodoError(error)));

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store