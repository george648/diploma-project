import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { todoReducer } from './reducers/todoReducer';

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;