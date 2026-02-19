import { Counter } from "../Pages/Counter";
import { Todo } from './../Pages/Todo';
import { About } from './../Pages/About';

export const AllRoutes = () => {
    return (
        <>
        <routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/about" element={<About />}></Route>
        </routes>
        </>
    )
}