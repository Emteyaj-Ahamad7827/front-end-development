import { Counter } from './../Pages/Counter';
import { Todo } from './../Pages/Todo';
import { About } from '../Pages/About';
import { Home } from "../Pages/Home";

export const AllRoutes = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/about" element={<About />}></Route>
        </Routes>
        </>
    );
};