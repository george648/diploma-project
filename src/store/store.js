import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/todoReducer';
import thunk from 'redux-thunk';

