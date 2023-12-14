import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

function CompleteTodo({ setTodosProps, iconClasses }) {
    const {todo, setTodos} = setTodosProps;

    const handleOnClickAction = (actionType) => {
        setTodos((prev) => {
            let updatedTodos;

            if (actionType === 'completed') {
                updatedTodos = prev.map((t) => t.id === todo.id ? {...t, isCompleted: true} : t);
            } else if (actionType === 'remove') {
                updatedTodos = prev.filter(t => t.id !== todo.id);
            }

            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return updatedTodos;
        });
    }

    return todo.isCompleted
        ? <IoClose onClick={() => handleOnClickAction('remove')} size={25} className={iconClasses} />
        : <IoCheckmarkDoneSharp onClick={() => handleOnClickAction('completed')} size={25} className={iconClasses} />
}

export default CompleteTodo;