import { SET_TODO_SUCCESS, SET_TODO_ERROR, DELETE_TODO_SUCCESS, DELETE_TODO_ERROR, LOADING, GET_TODO_LIST_SUCCESS, COMPLETE_TODO_SUCCESS, COMPLETE_TODO_ERROR, GET_TODO_LIST_ERROR, HIDE_DELETED_TODO } from '../types/types';

const initialState = {
    user: {},
    isLoading: false,
    todoList: [],
    deletedTodo: {
        name: '',
    },
    isSuccessfullyDeleted: false,
    error: '',
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_SUCCESS:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
                isLoading: false,
                error: initialState.error,
            };
        case SET_TODO_ERROR:
            return {
                ...state,
                error: action.payload,
                todoList: state.todoList,
                isLoading: false,
            };
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                deletedTodo: action.payload,
                isSuccessfullyDeleted: true,
                todoList: state.todoList.filter(({ _id }) => _id !== action.payload._id),
            };
        case DELETE_TODO_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                isSuccessfullyDeleted: false,
                deletedTodo: initialState.deletedTodo,
                todoList: initialState.todoList,
            };
        case HIDE_DELETED_TODO:
            return {
                ...state,
                isSuccessfullyDeleted: false,
            }
        case LOADING:
            return { ...state, isLoading: true };
        case GET_TODO_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todoList: action.payload,
                error: initialState.error,
            };
        case COMPLETE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todoList: state.todoList.map((todo) => {
                    if (todo._id === action.payload._id) {
                        todo.completed = action.payload.completed;
                    }

                    return todo;
                }),
            };
        case COMPLETE_TODO_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case GET_TODO_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                todoList: initialState.todoList,
            };
        default:
            return state;
    }
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_ERROR:
            return {
                ...state,
                error: action.payload,
                todoList: state.todoList,
                isLoading: false,
            };
        default:
            return state;
    }
}