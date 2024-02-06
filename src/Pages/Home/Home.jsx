import React from "react";
import {
    ContainerAll, ContainerPadre,
} from "../../Componentes/Contenedor/ContainerStyles";
import {
    ContainerBotonesHome,
    ImgMobile,
    LogoMobile,
    TitleMobile,
} from "./HomeStyles";
import { useNavigate } from "react-router-dom/dist";
import LogoCliente from "../../Imagenes/BecaShop.png";

const HomeStyles = () => {

    const navigate = useNavigate();

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
                <ContainerBotonesHome>
                    <button
                        color="secondary"
                        style={{ width: "130px" }}
                        onClick={() => navigate('/login')}
                    >
                        Ingresar con Email
                    </button>
                    <button
                        color="secondary"
                        style={{ width: "130px" }}
                        onClick={() => navigate("/Registro")}
                    >
                        Registrarse
                    </button>
                </ContainerBotonesHome>
            </ContainerAll>
        </ContainerPadre>
        </>
    );
};

export default HomeStyles;
