
import { createContext, useState } from "react";

<<<<<<< HEAD
export const CounterValContext = createContext(null)
export const CounterContext = ({ children }) => {
=======
export const CounterValContext = createContext(null);
export const CounterContext = ({ children}) => {
>>>>>>> 06326368078f506e21cf0440fc0a961769c15993
    const [count, setCount] = useState(0);
    return (
        <CounterValContext.Provider value={{ count, setCount}}>
            {children}
        </CounterValContext.Provider>
    );
};