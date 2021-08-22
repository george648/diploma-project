import PropTypes from 'prop-types';
import { StyledTodos } from './StyledTodo';
import { StyledDeleteButton } from './StyledDeleteButton';

export const Todos = ({ completeTodoHandler, todoList, deleteTodoHandler, showDeletedTag }) => {
    const buttonDeleteHandler = ({ target: { dataset: { id } } }) => {
        showDeletedTag();
        deleteTodoHandler(id);
    };
  
    const passEventToCompleteHandler = ({ target: { dataset: { id }, checked } }) => {
        completeTodoHandler(id, checked)
    };

    return (
        <ol>
            {todoList.length? todoList.map(({ name, description, _id, completed }) => (
                <li key={_id}>
                    <StyledTodos>
                        <div>
                            <span>Name:<strong>{name}.</strong></span>
                            <span> Description: <strong>{description}.</strong></span>
                        </div>
                        <div>
                            <input checked={completed} data-id={_id} type="checkbox" onChange={passEventToCompleteHandler} />
                            <StyledDeleteButton onClick={buttonDeleteHandler} data-id={_id}>delete task</StyledDeleteButton>
                        </div>
                    </StyledTodos>
                </li>
            )) :(
            <div>there no one todo </div>
            )}
        </ol>

    )
};

Todos.propTypes = {
    completeTodoHandler: PropTypes.func.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        _id: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
    })),
    deleteTodoHandler: PropTypes.func.isRequired,
    showDeletedTag: PropTypes.func.isRequired,
};