import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

function CompleteTodo({ setTodosProps, iconClasses }) {
    const {todo, setTodos} = setTodosProps;
    const handleOnClickRemove = () => {
        setTodos((prev) => {
            const newTodos = prev.filter(t => t.id !== todo.id);
            localStorage.setItem('todos', JSON.stringify(newTodos));

            return newTodos;
        });
    }

    const handleOnClickCompleted = () => {
        setTodos((prev) => {
            const updatedTodos = prev.map((t) => t.id === todo.id ? {...t, isCompleted: true} : t);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return updatedTodos;
        });
    }

    return todo.isCompleted
        ? <IoClose onClick={handleOnClickRemove} size={25} className={iconClasses} />
        : <IoCheckmarkDoneSharp onClick={handleOnClickCompleted} size={25} className={iconClasses} />
}

export default CompleteTodo;