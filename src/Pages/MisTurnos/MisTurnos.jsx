import React, { useEffect } from 'react';
import { ContainerAll } from '../../Componentes/Contenedor/ContainerStyles';
import { useDispatch, useSelector } from 'react-redux';
import TurnosConfirmados from './TurnosConfirmados';
import { CambiarTurno, SinTurnoContainer, TitleTurnos } from './MisTurnosStyles';
import { useNavigate } from 'react-router-dom';
import { getTurnos } from '../../Axios/axiosUser';
import { clearError, fetchturnosFail } from '../../Redux/Slices/ObtenerTurnos';
import Loader from '../../UX/Loader/Loader'
const MisTurnos = () => {
    const TurnosTomados = useSelector(state => state.turnoConfirmado.turnoConfirmado);
    const { turnos, loading, error } = useSelector(state => state.turnoCliente);

    if (loading && !turnos) {
      return <Loader styles={{ height: '50px', width: '50px' }} />;
    }
  
    if (error) {
      return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
    }
    return (
        <>
            <ContainerAll style={{ justifyContent: 'start' }}>
                <TitleTurnos>
                    <h2>Mis turnos</h2>
                </TitleTurnos>
                {turnos?.length? (
                    turnos.map( turno => <TurnosConfirmados {...turno}/>)
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
