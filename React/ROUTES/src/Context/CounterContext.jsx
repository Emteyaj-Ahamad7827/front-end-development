import { createContext, useState } from "react";

export const CounterValContext = ({ children}) => {
    const [count, setCount] = useState(0);
    return (
        <CounterValContext.Provider value={{ count, setCount}}>
            {children}
        </CounterValContext.Provider>
    );
};