import React, { useEffect } from 'react'
import { EmpleadoOption, EmpleadosContainer, NombreEmpleado } from './ElegirEmpleadoStyles'
import { ContainerAll, ContainerPadre } from '../../Componentes/Contenedor/ContainerStyles'
import { TitleTurnos } from '../MisTurnos/MisTurnosStyles'
import empleado from '../../Imagenes/user.svg'
import { useDispatch, useSelector } from 'react-redux'
import {getEmpleados} from '../../Axios/axiosEmpleados'
import { useNavigate } from 'react-router-dom'
const ElegirEmpleado = () => {
  const {empleados, error} = useSelector(state => state.listaEmpleados);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if(!empleados){
      getEmpleados(dispatch)
    }
  }, [empleados, error, dispatch])
  return (
    <>
      <ContainerPadre>
        <ContainerAll>
          <TitleTurnos>
            Elegi el profesional
          </TitleTurnos>
          <EmpleadosContainer >
          <EmpleadoOption style={{justifyContent:'start'}}  onClick={() => navigate('/elegirturno')}>
            <NombreEmpleado>
                  <img src={empleado} alt="empleado" />
                  <p>Primero disponible</p>
              </NombreEmpleado>
          </EmpleadoOption>
            { empleados !== null ? (
              empleados.map(emp => (
                <EmpleadoOption onClick={() => navigate('/elegirturno')}>
                  <NombreEmpleado>
                    <img src={empleado} alt="empleado" />
                    <p>{emp.nombre}</p>
                  </NombreEmpleado>
                  
                  <p className='rol'>{emp.rol}</p>
                </EmpleadoOption>
              ))

              ) : (
                'No hay empleados disponibles'
              )
            }
          </EmpleadosContainer>
        </ContainerAll>
      </ContainerPadre>

    </>
  )
}

export default ElegirEmpleado