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
import VerificarEmail from '../Pages/VerificarEmail/VerificarEmail';
import ElegirEmpleado from '../Pages/ElegirEmpleado/ElegirEmpleado';
import Servicios from '../Pages/Servicios/Servicios';


const Routes = () => {

  const user = useSelector((state) => state.user.currentUser);
  const servicioElegido = useSelector((state) => state.servicioSeleccionado.ServicioSeleccionado)
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
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
          
          <Route
            path="/nav"
            element={
              <Navbar />
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
              !user ? (
                <Navigate to="/" />
              ) : (
              <CSSTransition
                classNames="fade"
                timeout={300}
                appear
                in={true}
                unmountOnExit
              >
                <ElegirTurno />
              </CSSTransition>
              )
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
            path="/VerificarEmail"
            element={
              <CSSTransition
                classNames="fade"
                timeout={300}
                appear
                in={true}
                unmountOnExit
              >
                <VerificarEmail />
              </CSSTransition>
            }
          />
          <Route
            path="/Elegir"
            element={
              servicioElegido == null ? (
                <Navigate to='/servicios'/>
              ) : (
              <CSSTransition
                classNames="fade"
                timeout={300}
                appear
                in={true}
                unmountOnExit
              >
                <ElegirEmpleado />
              </CSSTransition>
              )
            }
          />
           <Route
            path="/Servicios"
            element={
              <CSSTransition
                classNames="fade"
                timeout={300}
                appear
                in={true}
                unmountOnExit
              >
                <Servicios />
              </CSSTransition>
            }
          />
          <Route path="*" element={<p>error</p>} />
        </ReactDomRoutes>
      </Layout>
      
    </BrowserRouter>
  );
};

export default Routes;
