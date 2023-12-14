import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

function NewTodo({ setTodos }) {
    const [todo, setTodo] = useState('');

    const handleOnClickSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            todo,
            isCompleted: false,
            id: uuidv4()
        }

        setTodos((prev) => {
            const updatedTodos = [
                newTodo,
                ...prev
            ];

            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return updatedTodos;
        });

        setTodo('');
    }

    return <form className="dark:text-white">
        <div className="w-[90%] sm:w-[75%] m-auto flex items-center flex-col sm:flex-row">
            <label className="mr-3 whitespace-nowrap">I need to</label>
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                name="todo"
                className="dark:bg-gray-300 border border-emerald-800 rounded w-full px-3 py-1 outline-none"
                placeholder="Learn react..."
            />
        </div>
        <button className="block w-full" onClick={handleOnClickSubmit}>
            <BsFillPlusCircleFill
                size={40}
                className="hover:fill-emerald-700 hover:bg-emerald-300 transition m-auto absolute left-[50%] translate-x-[-50%] bottom-0 border-2 border-emerald-700 bg-emerald-700 rounded-full fill-emerald-300 translate-y-[50%]"
            />    
        </button>
    </form>
}

export default NewTodo;