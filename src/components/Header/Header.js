import { NavLink } from 'react-router-dom';
import './header.scss';

export const Header = () => (
  <header>
    <h2>TodoList</h2>
    <div className="headerWrapper">
      <NavLink className="allTodos" to="/all-todos">
        all Todos
      </NavLink>
      <NavLink className="completedTodos" to="/completed-todos">
        Completed Todos
      </NavLink>
      <NavLink className="uncompletedTodos" to="/uncompleted-todos">
        Uncompleted Todos
      </NavLink>
    </div>
  </header>
);
