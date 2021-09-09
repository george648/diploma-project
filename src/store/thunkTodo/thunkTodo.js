import { setLoading, postTodoSuccess, deleteTodoSuccess, deleteTodoError, postTodoError, getTodoListSuccess, getTodoListError, completeTodoError, completeTodoSuccess } from '../actions/actions';

export const getTodoList = () => (dispatch) =>
    fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
    })
        .then(dispatch(setLoading()))
        .then((response) => response.json())
        .then((data) => {
            dispatch(getTodoListSuccess(data));
        })
        .catch((error) => {
            getTodoListError(error);
        });

export const postTodoList = (body) => (dispatch) =>
    fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(body),
    })
        .then(dispatch(setLoading()))
        .then((data) => data.json())
        .then((response) => {
            if (!response.message) {
                dispatch(postTodoSuccess(response));
            } else {
                dispatch(postTodoError(response.message));
            }
        })
        .catch((error) => dispatch(postTodoError(error)));

export const deleteTodo = (id) => (dispatch) =>
    fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
    })
        .then((response) => response.json())
        .then((data) => dispatch(deleteTodoSuccess(data)))
        .catch((error) => dispatch(deleteTodoError(error)));

export const completeTodo = (id, completed) => (dispatch) =>
    fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ completed }),
    })
        .then((response) => response.json())
        .then((data) => dispatch(completeTodoSuccess(data)))
        .catch((error) => dispatch(completeTodoError(error)));

export const hideDeletedTodo = () => ({
    type: 'HIDE_DELETED_TODO',
});