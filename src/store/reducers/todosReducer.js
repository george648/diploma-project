import {
  SET_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  LOADING,
  GET_TODO_LIST_SUCCESS,
  COMPLETE_TODO_SUCCESS,
  GET_TODO_LIST_ERROR,
  HIDE_DELETED_TODO,
} from '../actionTypes';

const initialState = {
  user: {},
  todoList: [],
  deletedTodo: {
    name: '',
  },
  isSuccessfullyDeleted: false,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO_SUCCESS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        deletedTodo: action.payload,
        isSuccessfullyDeleted: true,
        todoList: state.todoList.filter(
          ({ _id }) => _id !== action.payload._id,
        ),
      };
    case DELETE_TODO_ERROR:
      return {
        ...state,
        isSuccessfullyDeleted: false,
        deletedTodo: initialState.deletedTodo,
        todoList: initialState.todoList,
      };
    case HIDE_DELETED_TODO:
      return {
        ...state,
        isSuccessfullyDeleted: false,
      };
    case LOADING:
      return { ...state, isLoading: true };
    case GET_TODO_LIST_SUCCESS:
      return {
        ...state,
        todoList: action.payload,
      };
    case COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo._id === action.payload._id) {
            todo.completed = action.payload.completed;
          }

          return todo;
        }),
      };
    case GET_TODO_LIST_ERROR:
      return {
        ...state,
        todoList: initialState.todoList,
      };
    default:
      return state;
  }
};
