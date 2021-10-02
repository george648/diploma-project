import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { todoListPropType } from '../propTypes/propTypes';

const UncompletedTodos = ({todoList}) => {
  const uncompletedTodos = todoList.filter(({ completed }) => !completed);

  return <div>Completed todos right now are: {uncompletedTodos.length}</div>;
};

const mapStateToProps = ({toDoListStore: { todoList }}) => ({
  todoList,
});

UncompletedTodos.propTypes = {
  todoList: PropTypes.arrayOf(todoListPropType).isRequired,
};

export default connect(mapStateToProps, null)(UncompletedTodos);