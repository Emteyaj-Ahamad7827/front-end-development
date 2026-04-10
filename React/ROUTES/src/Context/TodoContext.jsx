<<<<<<< HEAD
import { createContext, useState } from "react";
=======
import { createContext, useReducer, useState } from "react";
import { Reducer } from "../Reducer/Reducer";
>>>>>>> 06326368078f506e21cf0440fc0a961769c15993

 export const TodosValContext = createContext(null); 

<<<<<<< HEAD
export const TodosContext = ({ children }) => {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);
=======
 export const TodosContext =  ({children}) =>{
    const[text, setText] = useState('');
    const[todo, setTodo]= useState([]);
    const[state, dispatch]= useReducer(Reducer, todo);
    
>>>>>>> 06326368078f506e21cf0440fc0a961769c15993

    return(
        <TodosValContext.Provider
        value={{text, todo, setText,setTodo, state, dispatch }}
        >
             {children}
        </TodosValContext.Provider>
    );
 };