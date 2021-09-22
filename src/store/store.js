import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import { todoReducer } from './reducers/todoReducer';
import { todosReducer } from './reducers/todosReducer';
import { errorReducer } from './reducers/errorReducer';
import { loadingReducer } from './reducers/loadingReducer';

const rootReducer = combineReducers({
    loadingReducer,
    errorReducer,
    todosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;