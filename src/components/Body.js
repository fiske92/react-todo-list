import { useState, useEffect } from "react";

import AllTodos from "./AllTodos";
import NewTodo from "./NewTodo";

function Body ({ currentTab }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const initTodos = JSON.parse(localStorage.getItem('todos'));
        initTodos && setTodos(initTodos);
    }, []);

    if (currentTab === 'new') return <NewTodo setTodos={setTodos} />
    return <AllTodos todosProp={{todos, setTodos}} filterTodo={currentTab} />
}

export default Body;