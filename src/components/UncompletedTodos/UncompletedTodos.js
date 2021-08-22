import {useSelector} from 'react-redux';

export const UncompletedTodos = () => {

    const todos = useSelector((state) => state.todoList);
    const unCompletedTodos = todos.filter(({ completed }) => !completed);

    return (
        <div>
            UncompletedTodos: {unCompletedTodos.length}
        </div>
    )
}