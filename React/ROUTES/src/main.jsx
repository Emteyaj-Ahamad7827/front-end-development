import { createRoot } from "react-dom/client";
import { App } from './App';

import { BrowserRouter } from "react-router-dom";
import { CounterContext } from './Context/CounterContext';
import { TodosContext } from './Context/TodoContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <TodosContext>
    <CounterContext>
      <App />
    </CounterContext>
  </TodosContext>
  </BrowserRouter>
);