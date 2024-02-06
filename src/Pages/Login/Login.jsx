import React, { useState } from 'react'
import { ContainerAll, ContainerPadre, FormContacto } from '../../Componentes/Contenedor/ContainerStyles'
import { ImgMobile, LogoMobile, TitleMobile } from '../Home/HomeStyles'
import LogoCliente from "../../Imagenes/BecaShop.png";
import { LoginInitialValues } from '../../Formik/initialValues';
import { Field, Formik } from 'formik';
import { validationschema } from '../../Formik/validationSchema';
import { toast } from 'react-toastify';
import { setUser } from '../../Redux/Slices/TurnosObtenidosSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginInput from './LoginInput';
import Submit from '../../UX/Submit/Submit';
import { loginUser } from '../../Axios/AxiosUser';
import { Button } from '@nextui-org/react';
import { motion } from "framer-motion";
import Loader from "../../UX/Loader/Loader";
import Input from '../../Generales/Input';


const Login = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleFormSubmit = async (values) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1800));
        toast.success("Usuario confirmado");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
        dispatch(setUser(values));
        navigate("/home");
    };
    return (
        <>
            <ContainerPadre>
                <ContainerAll>
                    <ImgMobile>
                        <LogoMobile src={LogoCliente} />
                    </ImgMobile>
                    <TitleMobile>
                        <h2>
                            Elegi el dia que quieras y <span>reserva</span> tu turno
                        </h2>
                    </TitleMobile>
                    <Formik
                            initialValues={LoginInitialValues}
                            validationSchema={validationschema}
                            onSubmit={async (values, actions) => {
                                const user = await loginUser(values.email,values.password);
                                console.log(user);  
                                handleFormSubmit();
                            }}              
                        >
                            <FormContacto>
                            
                                <Field
                                    name="email"
                                    label="Email"
                                    as={Input}
                                    placeholder="Escribi tu Email"
                                    type="email"
                                />
                    
                                 <Field
                                    name="password"
                                    label="Contraseña"
                                    as={Input}
                                    placeholder="Escribi tu contraseña"
                                    type="text"
                                />

                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        border: "none",
                                        padding: 0,
                                        background: "none",
                                        cursor: "pointer",
                                    }}
                                    type="submit"
                                >
                                    <Button
                                        style={{
                                            backgroundColor: "#DB4ECF",
                                            color: "white", marginBottom:'20px'
                                        }}
                                    >
                                        {loading ? <Loader /> : "Buscar turno"}
                                    </Button>
                                </motion.button>
                            </FormContacto>
                        </Formik>
                </ContainerAll>
            </ContainerPadre>
        </>
    )
}

export default Login

/*<Submit
                        color="secondary"
                        style={{
                            width: "130px",
                            opacity: inputHidden ? "1" : "0",
                            transform: inputHidden ? "scale(1)" : "scale(0.5)",
                            transition: "0.3s",
                        }}
                        onClick={() => {
                            if (inputValue === usuario.email) {
                                navigate("/Home");
                            } else if (inputValue === "") {
                                toast.error("Debe completar con su correo");
                            } else {
                                toast.warning("Correo no registrado");
                            }
                        }}
                    >
                        Ingresar
                    </Submit>*/