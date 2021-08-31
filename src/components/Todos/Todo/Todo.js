import PropTypes from 'prop-types';
import { StyledTodos } from './StyledTodo';
import { StyledDeleteButton } from './StyledDeleteButton';

export const Todo = ({ id, name, description, completed, buttonDeleteHandler, checkHandler }) => (
  <li>
    <StyledTodos>
      <div>
        <span>
          Name:<strong>{name}.</strong>
        </span>
        <span>
          {' '}
            Description: <strong>{description}.</strong>
        </span>
      </div>
      <div>
        <input
          checked={completed}
          type="checkbox"
          onChange={(event) => checkHandler(id, event.target.checked)}
        />
        <StyledDeleteButton
          onClick={() => buttonDeleteHandler(id)}
        >
          delete task
            </StyledDeleteButton>
      </div>
    </StyledTodos>
  </li>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonDeleteHandler: PropTypes.func.isRequired,
  checkHandler: PropTypes.func.isRequired,
};