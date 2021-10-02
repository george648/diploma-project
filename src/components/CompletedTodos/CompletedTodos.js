import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { todoListPropType } from '../propTypes/propTypes';

const CompletedTodos = ({todoList}) => {
  const completedTodos = todoList.filter(({ completed }) => completed);

  return <div>Completed todos right now are: {completedTodos.length}</div>;
};

const mapStateToProps = ({toDoListStore: { todoList }}) => ({
  todoList,
});

CompletedTodos.propTypes = {
  todoList: PropTypes.arrayOf(todoListPropType).isRequired,
};

export default connect(mapStateToProps, null)(CompletedTodos);
