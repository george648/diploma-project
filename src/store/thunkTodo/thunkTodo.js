import { fetchUtil } from '../../utils/fetchUtil';
import {
    setLoading,
    postTodoSuccess,
    deleteTodoSuccess,
    deleteTodoError,
    postTodoError,
    getTodoListSuccess,
    getTodoListError,
    completeTodoError,
    completeTodoSuccess,
} from '../actions/actions';

export const getTodoList = () => (dispatch) => fetchUtil(`${process.env.REACT_APP_API_URL}/tasks`, 'GET', null, process.env.REACT_APP_TOKEN)
        .then(dispatch(setLoading()))
        .then((response) => response.json())
        .then((data) => {
            dispatch(getTodoListSuccess(data));
        })
        .catch((error) => {
            getTodoListError(error);
        });

export const postTodoList = (body) => (dispatch) => fetchUtil(`${process.env.REACT_APP_API_URL}/tasks`, 'POST', JSON.stringify(body), process.env.REACT_APP_TOKEN)
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

export const deleteTodo = (id) => (dispatch) => fetchUtil(`${process.env.REACT_APP_API_URL}/tasks/${id}`, 'DELETE', null, process.env.REACT_APP_TOKEN)
        .then((response) => response.json())
        .then((data) => dispatch(deleteTodoSuccess(data)))
        .catch((error) => dispatch(deleteTodoError(error)));

export const completeTodo = (id, completed) => (dispatch) => fetchUtil(`${process.env.REACT_APP_API_URL}/tasks/${id}`, 'PATCH', JSON.stringify({completed}), process.env.REACT_APP_TOKEN)
        .then((response) => response.json())
        .then((data) => dispatch(completeTodoSuccess(data)))
        .catch((error) => dispatch(completeTodoError(error)));

export const hideDeletedTodo = () => ({
    type: 'HIDE_DELETED_TODO',
});