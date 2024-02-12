import React from 'react'
import { ContainerPadre } from '../../Componentes/Contenedor/ContainerStyles'
import { ContainerRegistro } from '../Registro/RegistroStyles'
import { ImgMobile, LogoMobile } from '../Home/HomeStyles'
import LogoCliente from "../../Imagenes/BecaShop.png";
import { TitleHomeUser } from '../HomeUser/HomeUserStyles';
import { ContainerInput, InputStyleCodigo } from './VerificarEmailStyles';
import { Field, Form, Formik } from 'formik';
import { CodigoInitialValues } from '../../Formik/initialValues';
import { codeValidationSchema } from '../../Formik/validationSchema';
import { Button } from '@nextui-org/react';
import Loader from '../../UX/Loader/Loader';
import { VerifyEmail } from '../../Axios/axiosUser';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const VerificarEmail = () => {
    const [loading, setLoading] = useState(false);
    const navigate =useNavigate();
    const handleFormCode = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1800));
        toast.success("Usuario verificado!");
        setLoading(false);
        navigate("/Login");
    }
  return (
    <>
    <ContainerPadre>
            <ContainerRegistro>
                <ImgMobile>
                    <LogoMobile src={LogoCliente} />
                </ImgMobile>
                <TitleHomeUser>
                    <h2>Ingresa tu codigo de verificación</h2>
                    <p>
                        Te enviamos a tu mail, tu codigo para verificar tu cuenta, revisa tambien el spam
                    </p>
                </TitleHomeUser>
                <ContainerInput>
                    <Formik
                            initialValues={CodigoInitialValues}
                            validationSchema={codeValidationSchema}
                            onSubmit={async (values, actions) => {
                                try {
                                    await VerifyEmail(values.email, values.code);
                                    actions.resetForm();
                                    handleFormCode();
                                } catch (error) {
                                    if (error.response && error.response.status === 400) {
                                        navigate("/Login");
                                    }
                                }
                            }}              
                    >
                        <Form className='form'>
                            <Field as={InputStyleCodigo} name='email' type='email' placeholder='Ingresa tu email aca'/>
                            <Field as={InputStyleCodigo} name='code' type='text' placeholder='Ingresa tu codigo aca'/>
                            <Button color='secondary' type="submit">                                  
                                        {loading ? <Loader /> : "Enviar"}
                                </Button>
                        </Form>
                        
                    </Formik>
                </ContainerInput>
            </ContainerRegistro>
    </ContainerPadre>
    </>  
)
}

export default VerificarEmail