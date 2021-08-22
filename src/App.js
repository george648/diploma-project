import './App.css';
import TodoList from './components/TodoList';
import { Header } from './components/Header/Header.jsx';
import { Route, Switch, Redirect } from "react-router-dom";
import { CompletedTodos } from './components/CompletedTodos/CompletedTodos';
import { UncompletedTodos } from './components/UncompletedTodos/UncompletedTodos';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

const App = (props) => {
    return (
        <>
            <Header />
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/all-todos" />
                    </Route>
                    <Route path="/all-todos">
                        <TodoList {...props} />
                    </Route>
                    <Route path="/completed-todos">
                        <CompletedTodos />
                    </Route>
                    <Route path="/uncompleted-todos">
                        <UncompletedTodos />
                    </Route>
                    <Route path="*">
                        <PageNotFound/>
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default App;