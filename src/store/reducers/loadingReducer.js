import {
    SET_TODO_SUCCESS,
    SET_TODO_ERROR,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_ERROR,
    LOADING,
    GET_TODO_LIST_SUCCESS,
    COMPLETE_TODO_SUCCESS,
    COMPLETE_TODO_ERROR,
    GET_TODO_LIST_ERROR,
} from '../types/types';

const initialState = {
    isLoading: false,
};

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case SET_TODO_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case DELETE_TODO_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODO_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case COMPLETE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case COMPLETE_TODO_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case GET_TODO_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
};