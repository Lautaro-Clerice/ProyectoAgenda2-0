import React from "react";
import { AgendasContainerTurnos, ContainerBotones, EliminarTurno, ObservacionesContainer, TurnoFechaContainer } from "./MisTurnosStyles";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useDispatch, useSelector } from "react-redux";
import deleteTurnos from "../../Axios/AxiosTurnos";
import { toast } from "react-toastify";

const TurnosConfirmados = ({ fecha, horario }) => {
    const dispatch = useDispatch();
    const usuario = useSelector((state) => state.user.currentUser.token);
    const turno = useSelector((state) => state.turnoCliente.turnos)
    const fechaFormateada = format(new Date(fecha), "d 'de' MMMM", { locale: es });

    const handleEliminarTurno = async () => {
        const resultado = window.confirm('Eliminar este turno?');
        console.log(turno[0]._id);
        const turnito = turno[0]._id;
        if (resultado) {
            deleteTurnos(dispatch, usuario, turnito);
            toast.success('Turno eliminado con exito')
            await new Promise(resolve => setTimeout(resolve, 2000));
            window.location.reload()
        }
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
                <EliminarTurno onClick={handleEliminarTurno}>Eliminar turno</EliminarTurno>
            </ContainerBotones>
            <hr style={{ width: '90%', marginTop: '10px' }} />
        </AgendasContainerTurnos>
    );
};

export default TurnosConfirmados;
