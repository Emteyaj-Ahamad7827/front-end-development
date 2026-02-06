import React  from "react";
import { Todos } from "./Todos";

export const TodoInput = () => {
    const [text, setText] = React.useState('');
    const [todo, setTodo] = React.useState([]);


    const handleAdd = () => {
        if (text.trim() === '') return;

        const data = {
            id: Date.now(),
            text,
            isEdits: false,
            isCompleted: false,
        };

        setTodo((prev) => [...prev, data]);
        console.log('todo: in function', todo);
        
    };
    console.log('todo:out of function', todo);

    return (
        <>
        <input type="text" onChange={(e) => setText
            (e.target.value)} />

            <button onClick={handleAdd}>Add</button>
            <Todos props={{ todo}} />
        
        </>
    );

};
