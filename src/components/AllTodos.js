import SingleTodo from "./SingleTodo";

function AllTodos({ todosProp, filterTodo }) {
    const {todos, setTodos} = todosProp;

    const todosToShow = todos.filter((todo) => {
        if (filterTodo === 'completed') return todo.isCompleted
        else if (filterTodo === 'ToDo') return !todo.isCompleted

        return todo;
    });

    const message = todosToShow.length ? '' : 'There is no ToDo$ to display...';

    if (!message) {
        return <ul className="select-none dark:text-white">
            {todosToShow.map((todo) => <SingleTodo todoData={{todo, setTodos}} key={todo.id} />)}
        </ul>
    }

    return <span className="block text-center dark:text-white">{message}</span>
}

export default AllTodos;