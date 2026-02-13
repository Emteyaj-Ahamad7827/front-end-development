import { useRef } from "react";
import './App.css';

export function App() {
  const inputValue = useRef(null);

  const showData=() => {
    const answer =inputValue.current.value;
    console.log('answer',answer);
    
  }


return (
  <>
  <input type="text" ref={inputValue}/>
  <button onClick={showData}>click</button>
  </>
)
};