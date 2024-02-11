import React, { useEffect } from "react";
import { AgendasContainerTurnos, CambiarTurno, ContainerBotones, EliminarTurno, ObservacionesContainer, TurnoFechaContainer } from "./MisTurnosStyles";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useDispatch, useSelector } from "react-redux";
import { eliminarTurno, setConfirmado } from '../../Redux/Slices/TurnoConfirmado'
import { useNavigate } from "react-router-dom";
import deleteTurnos from "../../Axios/AxiosTurnos";

const TurnosConfirmados = ({ fecha, horario }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usuario = useSelector((state) => state.user.currentUser.token);
    const turno = useSelector((state) => state.turnoCliente.turnos)
    const fechaFormateada = format(new Date(fecha), "d 'de' MMMM", { locale: es });

    const handleEliminarTurno = () => {
        const resultado = window.confirm('Eliminar este turno?');
        console.log(turno[0]._id);
        const turnito = turno[0]._id;
        if (resultado) {
            deleteTurnos(dispatch, usuario, turnito);
            window.location.reload()
        }
    };

    const handleModificarTurno = () => {
        dispatch(setConfirmado(null));
        navigate('/ElegirTurno');
    };

    return (
        <AgendasContainerTurnos>
            <TurnoFechaContainer>
                <h2 className="turno">
                    {fechaFormateada}, {horario}
                </h2>
            </TurnoFechaContainer>
            <ObservacionesContainer>
                <h2 className="observacion">
                    Tenes 10 minutos de tolerancia para tu turno. Cancelaciones
                    antes de las 24 hs, sino se debera abonar el 40% del turno
                </h2>
            </ObservacionesContainer>
            <ContainerBotones>
                <CambiarTurno onClick={handleModificarTurno}>Cambiar turno</CambiarTurno>
                <EliminarTurno onClick={handleEliminarTurno}>Eliminar turno</EliminarTurno>
            </ContainerBotones>
            <hr style={{ width: '90%', marginTop: '10px' }} />
        </AgendasContainerTurnos>
    );
};

export default TurnosConfirmados;
