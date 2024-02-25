import React from "react";
import { AgendasContainerTurnos, ContainerBotones, EliminarTurno, ObservacionesContainer, TurnoFechaContainer } from "./MisTurnosStyles";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useDispatch, useSelector } from "react-redux";
import deleteTurnos, { liberarTurno } from "../../Axios/AxiosTurnos";
import { toast } from "react-toastify";
import { colorPrincipal } from "../../UX/Colors";

const TurnosConfirmados = ({ fecha, horario, empleado}) => {
    const dispatch = useDispatch();
    const usuario = useSelector((state) => state.user.currentUser.token);
    const turno = useSelector((state) => state.turnoCliente.turnos)

    const handleEliminarTurno = async () => {
        const datosTurnos= {fecha, horario, empleado}
        const resultado = window.confirm('Eliminar este turno?');
        console.log(turno[0]._id);
        
        const turnito = turno[0]._id;
        if (resultado) {
            
            liberarTurno(datosTurnos)
            deleteTurnos(dispatch, usuario, turnito);
            toast.success('Turno eliminado con exito')
            await new Promise(resolve => setTimeout(resolve, 1000));
            window.location.reload()
        }
    };
    

    return (
        <AgendasContainerTurnos>
            <TurnoFechaContainer>
                <h2 className="turno">
                    {fecha}, {horario}
                </h2>
            </TurnoFechaContainer>
            <ObservacionesContainer>
                <h2 className="observacion">
                    Tenes 10 minutos de tolerancia para tu turno.<br/> <span style={{color:'red'}}> Cancelaciones </span>
                    antes de las 24 hs, sino se debera abonar el 40% del turno. <br/>
                    Ante cualquier duda con tu turno hace <a href="
                    https://wa.link/30q4cm" target="blank" style={{color: colorPrincipal}}> Click aca. </a>
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
