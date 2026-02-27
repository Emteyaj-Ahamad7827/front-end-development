import { createRoot } from "react-dom/client";
import { App } from './App';

import { BrowserRouter } from "react-router-dom";
import { CounterContext } from './Context/CounterContext';
import { TodosContext } from './Context/TodoContext';
import { AuthContext } from "./Context/AuthProvider";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext>
  <TodosContext>
    <CounterContext>
      <App />
    </CounterContext>
  </TodosContext>
  </AuthContext>
  </BrowserRouter>
);