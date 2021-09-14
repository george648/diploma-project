import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useState } from 'react';
import { StyledAddButton } from './StyledAddButton';
import { postTodoList } from '../../store/thunkTodo/thunkTodo';

export const TodoForm = ({ isLoading, error, postTodo }) => {
  const INITIAL_FORM_DATA = {
    name: '',
    description: '',
  };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postTodo(formData);
    setFormData(() => (INITIAL_FORM_DATA));
  };

  const onChangeName = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onChangeDescription = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
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
};

TodoForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  postTodo: PropTypes.func.isRequired,
};

const mapStateToProps = ({isLoading, error}) => ({
  isLoading,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  postTodo: (form) => dispatch(postTodoList(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);