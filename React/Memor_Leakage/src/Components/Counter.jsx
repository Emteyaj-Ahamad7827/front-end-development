import React, {useEffect} from "react";

export const Counter = () => {
    const [count, setCount] = React.useState(0);

     const handleIncrement = () => {
        setCount(count +1);
     };
     const handleDecrement = () => {
        setCount(count -1);
     };

     useEffect(() => {
        let id = setInterval(() => {
            console.log('timer', Date.now());
            
        }, 200);
        console.log('id', id);
        return () => {
            clearInterval(id);
        };
        
     }, []) ;

     return (
        <>
        <h1>Counter</h1>
        <h3>

            
        </h3>
        </>
     )
}