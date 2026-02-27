import { Route, Routes } from 'react-router-dom';
import { Home } from './../Pages/Home';
import { Counter } from './../Pages/Counter';
import { Todo } from './../Pages/Todo';
import { About } from '../Pages/About';
import { User } from '../Pages/User';
import { Login } from '../Pages/login';
import { PrivateRoutes } from '../Components/PrivateRoutes';
import { SinglePage } from './../Pages/SinglePage';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/user"
          element={
            <PrivateRoutes>
              <User />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="users/:paramId"
          element={
            <PrivateRoutes>
              <SinglePage />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};