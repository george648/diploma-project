import { 
    SET_TODO_SUCCESS, 
    SET_TODO_ERROR, 
    DELETE_TODO_ERROR, 
    GET_TODO_LIST_SUCCESS, 
    COMPLETE_TODO_ERROR, 
    GET_TODO_LIST_ERROR, 
    } from '../types/types';

const initialState = {
    error: '',
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_SUCCESS:
            return {
                ...state,
                error: initialState.error,
            };
        case SET_TODO_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case DELETE_TODO_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case GET_TODO_LIST_SUCCESS: 
            return {
                ...state,
                error: initialState.error,
            };
        case COMPLETE_TODO_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case GET_TODO_LIST_ERROR: 
            return {
                ...state,
                error: action.payload,
            };
        default: 
            return state;
    }
};