import { useContext } from "react";

import { TodosValContext } from '../Context/TodoContext';

export const TodoInput = () => {
    const { todo, setTodo, test, setText } = useContext
    (TodosValContext);
    console.log('todo',todo);

    const handleAdd = () => {
        const todpData =
    }
    
}