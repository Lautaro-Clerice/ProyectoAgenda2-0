import React, { useEffect } from 'react'
import { ContainerAll, ContainerPadre } from '../../Componentes/Contenedor/ContainerStyles'
import { TitleTurnos } from '../MisTurnos/MisTurnosStyles'
import { EmpleadoOption, EmpleadosContainer, NombreEmpleado } from '../ElegirEmpleado/ElegirEmpleadoStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getServicios } from '../../Axios/axiosServicios'
import icon from '../../Imagenes/service.svg'
import { useNavigate } from 'react-router-dom'
import { setServElegido } from '../../Redux/Slices/ServicioElegido'
import Loader from '../../UX/Loader/Loader'
const Servicios = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch();
    const service = useSelector((state) => state.servicios.servicios)
    const { servicios, loading } = useSelector(state => state.servicios);
    useEffect(() => {
        if(!service){
            getServicios(dispatch)
        }
        dispatch(setServElegido(null))
    },[dispatch])
    const handleAddServices = (servicio) => {
      
      dispatch(setServElegido(servicio));
      navigate('/elegir');
    }
  return (
    <>
        <ContainerPadre>
            <ContainerAll>
                <TitleTurnos>Nuestros servicios</TitleTurnos>
            
            <EmpleadosContainer style={{justifyContent:'start'}} >
            {loading ? (
            <Loader style={{color:'black'}}/>
          ) : (
            servicios !== null ? (
              servicios.map(serv => (
                <EmpleadoOption onClick={() => handleAddServices(serv)} key={serv.id}>
                  <NombreEmpleado>
                    <img src={icon} alt="service" />
                    <p>{serv.servicio}</p>
                  </NombreEmpleado>
                  <p className='rol'>{serv.precio}</p>
                </EmpleadoOption>
              ))
            ) : (
              'No hay servicios disponibles'
            )
          )}
          </EmpleadosContainer>
          </ContainerAll>
        </ContainerPadre>
    </>
  )
}

export default Servicios