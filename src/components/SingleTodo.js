import { useEffect, useState, useRef } from "react";
import EditTodo from "./EditTodo";
import CompleteTodo from "./CompleteTodo"

function SingleTodo({ todoData }) {
    const {todo, setTodos} = todoData;
    const [inputDisabled, setInputDisabled] = useState(true);
    const [inputValue, setInputValue] = useState(todo.todo);
    const inputRef = useRef(null);

    const inputBgClass = todo.isCompleted ? 'bg-emerald-200' : 'bg-red-400';
    const inputEditable = inputDisabled ? '' : 'bg-white border-emerald-950';
    const iconClasses = 'cursor-pointer w-[15%] md:w-[7%]';
    
    useEffect(() => {
        !inputDisabled && inputRef.current.focus();
    }, [inputDisabled]);
    
    const handleOnBlur = () => {
        setInputDisabled(prev => !prev);

        setTodos((prev) => {
            const updatedTodos = prev.map((t) => t.id === todo.id ? {...todo, todo: inputValue} : t);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return updatedTodos;
        });
    }

    return <li className="my-5 first:mt-0 last:mb-0 flex items-center">
        <input
            ref={inputRef}
            type="text"
            onBlur={handleOnBlur}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className={`border capitalize rounded w-full px-4 py-2 mr-3 text-emerald-950 cursor-pointer ${inputBgClass} ${inputEditable}`}
            disabled={inputDisabled}
        />
        <EditTodo inputDisabledProp={{inputDisabled, setInputDisabled}} classes={iconClasses} />
        <CompleteTodo iconClasses={iconClasses} setTodosProps={{todo, setTodos}} />
    </li>
}

export default SingleTodo;