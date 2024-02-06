import React from "react";
import {
    ContainerAll, ContainerPadre,
} from "../../Componentes/Contenedor/ContainerStyles";
import { CambiarTurno, SinTurnoContainer } from "../MisTurnos/MisTurnosStyles";
import { useSelector } from "react-redux";
import {
    TitleHomeUser,
    TurnosContainer,
    TurnosProximos,
} from "./HomeUserStyles";
import LogoCliente from "../../Imagenes/BecaShop.png";
import { ImgMobile, LogoMobile } from "../Home/HomeStyles";
import TurnosConfirmados from "../MisTurnos/TurnosConfirmados";
import { IoMdPaperPlane } from "react-icons/io";
import { useNavigate } from "react-router-dom";




export const HomeUser = () => {
    const navigate = useNavigate();
    const TurnosTomados = useSelector(
        (state) => state.turnoConfirmado.turnoConfirmado
    );

    return (
        <>
        <ContainerPadre>
            <ContainerAll style={{ justifyContent: "start" }}>
                <ImgMobile style={{ justifyContent: "start" }}>
                    <LogoMobile
                        style={{ marginLeft: "10px" }}
                        src={LogoCliente}
                    />
                </ImgMobile>
                <TitleHomeUser>
                    <h2>Mis Turnos</h2>
                    <p>
                        Bienvenido a tu dashboard! Aca podes ver tus turnos,
                        modificarlos o eliminarlos.
                    </p>
                </TitleHomeUser>
                <TurnosProximos>
                    <p>Proximos Turnos</p>
                </TurnosProximos>
                <TurnosContainer>
                    {TurnosTomados !== null ? (
                    <TurnosConfirmados {...TurnosTomados} />
                ) : (
                    <SinTurnoContainer>
                        <p>No tenes turnos tomados</p>
                        <CambiarTurno className="BotonAgregar" onClick={() => navigate('/ElegirTurno')}>Agregar turno <IoMdPaperPlane className="icon"/></CambiarTurno>

                    </SinTurnoContainer>
                )}
                </TurnosContainer>
                
            </ContainerAll>
        </ContainerPadre>
        </>
    );
};
