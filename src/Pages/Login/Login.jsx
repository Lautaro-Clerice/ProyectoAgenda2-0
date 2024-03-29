import React from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from './LoginInput'
import {
  Form,
  LoginContainerStyled,
  LoginEmailStyled,
} from './LoginStyles';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/Slices/TurnosObtenidosSlice';
import { LoginInitialValues } from '../../Formik/initialValues';
import { loginValidationSchema } from '../../Formik/validationSchema';
import {loginUser} from '../../Axios/axiosUser'
import { ContainerPadre } from '../../Componentes/Contenedor/ContainerStyles';
import { ContainerRegistro } from '../Registro/RegistroStyles';
import { ImgMobile, LogoMobile } from '../Home/HomeStyles';
import LogoCliente from "../../Imagenes/BecaShop.png";
import { toast } from 'react-toastify';
import {nombreCliente} from '../../Cliente/ArchivosCliente'
import Loader from '../../UX/Loader/Loader';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { colorPrincipal } from '../../UX/Colors';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForLogin = async () => {
    toast.success(`Bienvenido a ${nombreCliente}`);
    navigate('/home');
  }
  return (
    <ContainerPadre>
            <ContainerRegistro>
                <ImgMobile>
                    <LogoMobile src={LogoCliente} />
                </ImgMobile>
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={LoginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async values => {
          setLoading(true);
          const user = await loginUser(values.email, values.password);
          if(user) {
            dispatch(setUser({
              ...user.usuario,
              token: user.token
            }))
            handleForLogin();
            
          }
          setLoading(false);
        }}
      >
        <Form>
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
          <Link to='/registro'>
            <LoginEmailStyled>¿No tenes cuenta?  <span style={{color: colorPrincipal}}>Crea una</span></LoginEmailStyled>
          </Link>
          <Button type='submit' color='secondary'>{loading ? <Loader/> : 'Iniciar sesion'}</Button>
        </Form>
      </Formik>
    </LoginContainerStyled>
    </ContainerRegistro>
    </ContainerPadre>
  );
};

export default Login;