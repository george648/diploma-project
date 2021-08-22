import PropTypes from 'prop-types';
import { useState } from 'react';
import { Todos } from '../Todos/Todos';
import { Modal } from '../UI/Modal/ModalWindow';
import { TodoForm } from '../TodoForm/TodoForm';
import { SearchedTodo } from '../SearchedTodo.js/SearchedTodo';

const TodoListView = ({ completeTodoHandler, deleteTodoHandler, isLoading, ...rest }) => {
    const [formStatus, setFormStatus] = useState(false);
    const closeModalWindowBtn = () => setFormStatus(false);
    const showDeletedTag = () => setFormStatus(true);

    const formPropsData = {
        isLoading,
        ...rest
    };

    const todoListData = {
        ...rest,
        showDeletedTag,
        deleteTodoHandler,
        completeTodoHandler,
    };

    return (
        <div>
            <h2>Hey, what's your main focus for today? </h2>
            <SearchedTodo />
            <TodoForm {...formPropsData} />
            {isLoading && <span>Loading ...</span>}
            {!isLoading && <Todos {...todoListData} />}
            {formStatus &&
                (
                    <Modal closeModalWindowBtn={closeModalWindowBtn}>You have just deleted {}</Modal>
                )
            }
        </div>
    )
};

TodoListView.propTypes = {
    completeTodoHandler: PropTypes.func.isRequired,
    deleteTodoHandler: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    rest: PropTypes.shape({
        handleFormSubmit: PropTypes.func.isRequired,
        error: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
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
    }),
};

export default TodoListView;