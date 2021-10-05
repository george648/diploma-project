import {
    SET_TODO_SUCCESS,
    SET_TODO_ERROR,
    DELETE_TODO_ERROR,
    GET_TODO_LIST_SUCCESS,
    COMPLETE_TODO_ERROR,
    GET_TODO_LIST_ERROR,
} from '../actionTypes';

const initialState = '';

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_SUCCESS:
            return '';
        case SET_TODO_ERROR:
            return action.payload;
        case DELETE_TODO_ERROR:
            return action.payload;
        case GET_TODO_LIST_SUCCESS:
            return '';
        case COMPLETE_TODO_ERROR:
            return action.payload;
        case GET_TODO_LIST_ERROR:
            return action.payload;
        default:
            return state;
    }
};