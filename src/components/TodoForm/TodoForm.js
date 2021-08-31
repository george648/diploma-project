import PropTypes from 'prop-types';
import { StyledAddButton } from './StyledAddButton';

export const TodoForm = ({ onChange, handleFormSubmit, isLoading, error }) => (
    <>
      <form onSubmit={handleFormSubmit} className="todoForm">
        <input
          onChange={onChange}
          className="todoInput"
          name="name"
          placeholder="enter nam0e of todo"
          type="text"
        />
        <input
          onChange={onChange}
          className="todoInput"
          name="description"
          placeholder="enter description of todo"
          type="text"
        />
        <StyledAddButton disabled={isLoading} className="addTodoButton">
          {isLoading ? 'Loading...' : 'Add Todo'}
        </StyledAddButton>
      </form>
      <span style={{ color: 'red' }}>{error}</span>
    </>
);

TodoForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
