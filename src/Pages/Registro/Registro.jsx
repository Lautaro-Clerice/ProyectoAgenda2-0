import React, { useState } from "react";
import {
    ContainerPadre,
    DatosTurno,
    FormContacto,
    TitleAgenda,
} from "../../Componentes/Contenedor/ContainerStyles";
import { Field, Formik } from "formik";
import { initialValues } from "../../Formik/initialValues";
import { validationschema } from "../../Formik/validationSchema";
import Input from "../../Generales/Input";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { toast } from "react-toastify";
import Loader from "../../UX/Loader/Loader";
import { setUser } from "../../Redux/Slices/TurnosObtenidosSlice";
import { ContainerRegistro, FormRegistro } from "./RegistroStyles";
import { colorTemplado } from "../../UX/Colors";
import { ImgMobile, LogoMobile } from "../Home/HomeStyles";
import LogoCliente from "../../Imagenes/BecaShop.png";
import { createUser } from "../../Axios/axiosUser";
import { Button } from "@nextui-org/react";
const Registro = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleFormSubmit = async (values) => {
        setLoading(true);
        toast.success("Usuario Registrado!");
        setLoading(false);
        dispatch(setUser(values));
        navigate("/VerificarEmail");

    };

    return (
        <>
        <ContainerPadre>
            <ContainerRegistro>
                <ImgMobile>
                    <LogoMobile src={LogoCliente} />
                </ImgMobile>
                <FormRegistro>
                    <DatosTurno>
                        <TitleAgenda>
                            <h2 style={{ color: colorTemplado }}>
                                Completa con tus datos!
                            </h2>
                        </TitleAgenda>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationschema}
                            onSubmit={async (values, actions) => {
                                await createUser(values.nombre, values.email,values.password, values.telefono);
                                actions.resetForm();   
                                handleFormSubmit();
                            }}              
                        >
                            <FormContacto>
                                <Field
                                    name="nombre"
                                    label="Nombre"
                                    as={Input}
                                    placeholder="Escribi tu nombre"
                                    type="text"
                                />
                                <Field
                                    name="email"
                                    label="Email"
                                    as={Input}
                                    placeholder="Escribi tu Email"
                                    type="email"
                                />
                                <Field
                                    name="telefono"
                                    label="Celular"
                                    as={Input}
                                    placeholder="Escribi tu nro. celular"
                                    type="number"
                                />
                                 <Field
                                    name="password"
                                    label="Contraseña"
                                    as={Input}
                                    placeholder="Escribi tu contraseña"
                                    type="text"
                                />

                                <Button
                                color="secondary"
                                    type="submit"
                                >                                  
                                        {loading ? <Loader /> : "Registrar"}
                                </Button>
                            </FormContacto>
                        </Formik>
                    </DatosTurno>
                </FormRegistro>
            </ContainerRegistro>
        </ContainerPadre>

        </>
    );
};

export default Registro;
