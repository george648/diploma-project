import PropTypes from 'prop-types';
import { StyledAddButton } from './StyledAddButton';

export const TodoForm = ({ onChangeName, onChangeDescription, handleFormSubmit, formData, isLoading, error }) => (
  <>
    <form onSubmit={handleFormSubmit} className="todoForm">
      <input
        onChange={onChangeName}
        className="todoInput"
        value={formData.name}
        name="name"
        placeholder="enter name of todo"
        type="text"
      />
      <input
        onChange={onChangeDescription}
        className="todoInput"
        value={formData.description}
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
)

TodoForm.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};