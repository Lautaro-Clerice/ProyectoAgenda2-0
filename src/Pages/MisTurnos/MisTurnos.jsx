import React from 'react';
import { ContainerAll } from '../../Componentes/Contenedor/ContainerStyles';
import { useSelector } from 'react-redux';
import TurnosConfirmados from './TurnosConfirmados';
import { CambiarTurno, SinTurnoContainer, TitleTurnos } from './MisTurnosStyles';
const MisTurnos = () => {
    const TurnosTomados = useSelector(state => state.turnoConfirmado.turnoConfirmado);

    return (
        <>
            <ContainerAll style={{ justifyContent: 'start' }}>
                <TitleTurnos>
                    <h2>Mis turnos</h2>
                </TitleTurnos>
                {TurnosTomados !== null ? (
                    <TurnosConfirmados {...TurnosTomados} />
                ) : (   
                    <SinTurnoContainer>
                        <p>No tenes turnos tomados</p>
                        <CambiarTurno>Agregar turno</CambiarTurno>
                    </SinTurnoContainer>
                )}
            </ContainerAll>
        </>
    );
};

export default MisTurnos;
