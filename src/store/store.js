import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { todosReducer as toDoListStore } from './reducers/todosReducer';
import { errorReducer as errorStore } from './reducers/errorReducer';
import { loadingReducer as isLoading } from './reducers/loadingReducer';

const rootReducer = combineReducers({
  isLoading,
  errorStore,
  toDoListStore,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
