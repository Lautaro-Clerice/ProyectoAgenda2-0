import React, { useEffect } from 'react'
import { ContainerAll, ContainerPadre } from '../../Componentes/Contenedor/ContainerStyles'
import { TitleTurnos } from '../MisTurnos/MisTurnosStyles'
import { EmpleadoOption, EmpleadosContainer, NombreEmpleado } from '../ElegirEmpleado/ElegirEmpleadoStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getServicios } from '../../Axios/axiosServicios'
import icon from '../../Imagenes/service.svg'
const Servicios = () => {
    const dispatch = useDispatch();
    const service = useSelector((state) => state.servicios.servicios)
    useEffect(() => {
        if(!service){
            getServicios(dispatch)
        }
    },[dispatch])

  return (
    <>
        <ContainerPadre style={{flexDirection:'column'}}>
            <ContainerAll>
                <TitleTurnos>Nuestros servicios</TitleTurnos>
            </ContainerAll>
            <EmpleadosContainer >
            { service !== null ? (
              service.map(serv => (
                <EmpleadoOption>
                  <NombreEmpleado>
                    <img src={icon} alt="service"/>
                    <p>{serv.servicio}</p>
                  </NombreEmpleado>
                  
                  <p className='rol'>{serv.precio}</p>
                </EmpleadoOption>
              ))

              ) : (
                'No hay empleados disponibles'
              )
            }
          </EmpleadosContainer>
        </ContainerPadre>
    </>
  )
}

export default Servicios