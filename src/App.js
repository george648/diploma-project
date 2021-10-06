import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import TodoList from './components/TodoList';
import { Header } from './components/Header/Header';
import CompletedTodos from './components/CompletedTodos/CompletedTodos';
import UncompletedTodos from './components/UncompletedTodos/UncompletedTodos';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Redirect to="/all-todos" />
      </Route>
      <Route path="/all-todos">
        <TodoList />
      </Route>
      <Route path="/completed-todos">
        <CompletedTodos />
      </Route>
      <Route path="/uncompleted-todos">
        <UncompletedTodos />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </>
);

export default App;
