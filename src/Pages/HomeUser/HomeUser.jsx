import React, { useEffect } from "react";
import {
    ContainerAll, ContainerPadre,
} from "../../Componentes/Contenedor/ContainerStyles";
import { CambiarTurno, SinTurnoContainer } from "../MisTurnos/MisTurnosStyles";
import { useDispatch, useSelector } from "react-redux";
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
import { clearError} from "../../Redux/Slices/ObtenerTurnos";
import getTurnos from "../../Axios/axiosUser";

export const HomeUser = () => {
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user.currentUser);
    const turnos = useSelector((state) => state.turnoCliente.turnos)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser) {
            dispatch(clearError());
        } else {
            getTurnos(dispatch, currentUser);
        }
    }, [dispatch, currentUser]);

    return (
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
                        agregar o eliminarlos.
                    </p>
                </TitleHomeUser>
                <TurnosProximos>
                    <p>Proximos Turnos</p>
                </TurnosProximos>
                <TurnosContainer>
                    {turnos?.length ? (
                        turnos.map(turno => <TurnosConfirmados key={turno._id} id={turno.id} fecha={turno.fecha} horario={turno.horario} empleado={turno.empleado} />)
                    ) : (
                        <SinTurnoContainer>
                            <p>No tenes turnos tomados</p>
                            <CambiarTurno className="BotonAgregar" onClick={() => navigate('/servicios')}>Agregar turno <IoMdPaperPlane className="icon"/></CambiarTurno>
                        </SinTurnoContainer>
                    )}
                </TurnosContainer>
            </ContainerAll>
        </ContainerPadre>
    );
};

export default HomeUser;
