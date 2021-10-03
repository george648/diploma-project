import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useState } from 'react';
import './TodoForm.scss';
import { postTodoList } from '../../store/thunkTodo/thunkTodo';
import { Input } from '../UI/Input/Input';

const INITIAL_FORM_DATA = {
  name: '',
  description: '',
};

const TodoForm = ({ error, isLoading, postTodo }) => {
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
    console.log(value)
  };

  const onChangeDescription = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(value)
  };

  console.log(formData)

  return (
    <>
      <form onSubmit={handleFormSubmit} className="todoForm">
        <Input
          onChange={onChangeName}
          value={formData.name}
          name="name"
          placeholder="enter name of todo"
        />
        <Input
          onChange={onChangeDescription}
          value={formData.description}
          name="description"
          placeholder="enter description of todo"
        />
        <button disabled={isLoading} className="addTodoButton">
          {isLoading ? 'Loading...' : 'Add Todo'}
        </button>
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

const mapStateToProps = ({ loadingStore: { isLoading }, errorStore: { error } }) => ({
  isLoading,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  postTodo: (form) => dispatch(postTodoList(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);