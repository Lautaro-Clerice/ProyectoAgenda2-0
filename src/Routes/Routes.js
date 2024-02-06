import React from 'react';
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
  Navigate
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from '../Pages/Home/Home';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Navbar from '../Componentes/Navbar/Navbar';
import Layout from '../Componentes/Layout/Layout';
import Registro from '../Pages/Registro/Registro';
import ElegirTurno from '../Pages/ElegirTurno/ElegirTurno';
import { HomeUser } from '../Pages/HomeUser/HomeUser';
import { useSelector } from 'react-redux';
import '../transition.css';
import Login from '../Pages/Login/Login';

const Routes = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route
            path="/nav"
            element={
              <CSSTransition
                classNames="fade"
                timeout={300}
                appear
                in={true}
                unmountOnExit
              >
                <Navbar />
              </CSSTransition>
            }
          />
          <Route
            path="/Registro"
            element={
              <CSSTransition
                classNames="fade"
                timeout={300}
                appear
                in={true}
                unmountOnExit
              >
                <Registro />
              </CSSTransition>
            }
          />
          <Route
            path="/Home"
            element={
              <ProtectedRoute redirectTo="/">
                <CSSTransition
                  classNames="fade"
                  timeout={300}
                  appear
                  in={true}
                  unmountOnExit
                >
                  <HomeUser />
                </CSSTransition>
              </ProtectedRoute>
            }
          />
          <Route
            path="/ElegirTurno"
            element={
              <CSSTransition
                classNames="fade"
                timeout={300}
                appear
                in={true}
                unmountOnExit
              >
                <ElegirTurno />
              </CSSTransition>
            }
          />
           <Route
            path="/Login"
            element={
              <CSSTransition
                classNames="fade"
                timeout={300}
                appear
                in={true}
                unmountOnExit
              >
                <Login />
              </CSSTransition>
            }
          />
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/home" />
              ) : (
                <CSSTransition
                  classNames="fade"
                  timeout={300}
                  appear
                  in={true}
                  unmountOnExit
                >
                  <Home />
                </CSSTransition>
              )
            }
          />
          <Route path="*" element={<p>error</p>} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
