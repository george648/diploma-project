import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import { todoReducer } from './reducers/todoReducer';
import { todosReducer as toDoListStore } from './reducers/todosReducer';
import { errorReducer as errorStore } from './reducers/errorReducer';
import { loadingReducer as loadingStore } from './reducers/loadingReducer';

const rootReducer = combineReducers({
    loadingStore,
    errorStore,
    toDoListStore,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;