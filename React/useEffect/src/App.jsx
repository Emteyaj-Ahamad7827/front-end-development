import { useEffect, useState } from "react";
import './App.css';

export function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount ((prev) => prev+1);
  };

  useEffect (() => {
    console.log('this is without dependency');
    
  });
  useEffect (() => {
    console.log('this is empty dependency');
    
  }, []);
  useEffect (() => {
    console.log('this is when count update then this effect  dependency work');
    
  }, [count]);



  return (
    <>
    <h1>hello</h1>
    <button onClick={handleClick}>click</button>
    </>
  )
};