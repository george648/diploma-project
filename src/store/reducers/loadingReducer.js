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
} from '../actionTypes';

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO_SUCCESS:
      return false;
    case SET_TODO_ERROR:
      return false;
    case DELETE_TODO_SUCCESS:
      return false;
    case DELETE_TODO_ERROR:
      return false;
    case LOADING:
      return true;
    case GET_TODO_LIST_SUCCESS:
      return false;
    case COMPLETE_TODO_SUCCESS:
      return false;
    case COMPLETE_TODO_ERROR:
      return false;
    case GET_TODO_LIST_ERROR:
      return false;
    default:
      return state;
  }
};
