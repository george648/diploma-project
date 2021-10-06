import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { StyledTodo } from './StyledTodo';
import { StyledDeleteButton } from './StyledDeleteButton';

export const Todo = ({
  id,
  name,
  description,
  completed,
  deleteTodoHandler,
  completeTodoHandler,
}) => {
  const buttonDeleteHandler = useCallback(() => {
    deleteTodoHandler(id);
  }, [id]);

  const checkHandler = useCallback(
    (event) => {
      completeTodoHandler(id, event.target.checked);
    },
    [id, completed],
  );

  return (
    <li>
      <StyledTodo>
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
          <input checked={completed} type="checkbox" onChange={checkHandler} />
          <StyledDeleteButton onClick={buttonDeleteHandler}>
            delete task
          </StyledDeleteButton>
        </div>
      </StyledTodo>
    </li>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
  completeTodoHandler: PropTypes.func.isRequired,
};
