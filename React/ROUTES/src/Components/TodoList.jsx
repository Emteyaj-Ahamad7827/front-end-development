import { useContext } from 'react'
import { TodosValContext } from '../Context/TodoContext';

import * as types from '../Reducer/Action';

export const TodoList =()=>{
     const {todo, dispatch } = useContext(TodosValContext);
     console.log('todo:list', todo);

     const handleEdits = (id) => {
        dispatch({ type: types.EDITS_TODO_ITEMS, payload: id });
     };
     const handleDelete = (id) => {
        dispatch({ type: types.DELETE_TODO_ITEMS, payload: id });
     };

     return (
        <>
        {todo.length > 0 && 
        todo.map((items) =>{
            return (
                <div
                key={items.id}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem'
                }}
                >
                    <input type="checkbos" />
                    <h3>
                        {items.id} - {items.text}
                    </h3>
                    <h4>{items.isEdits ? 'true' : 'false'}</h4>
                    <button
                    onClick={() => {
                        handleEdits(items.id);
                    }}
                    >
                        edit
                    </button>
                    <button
                    onClick={() => {
                        handleDelete(items.id);
                    }}
                    >
                        delete
                    </button>
                </div>
            );
        })}
        </>
     );

};