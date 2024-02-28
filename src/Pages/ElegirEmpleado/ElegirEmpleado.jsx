import React, { useEffect } from 'react'
import { EmpleadoOption, EmpleadosContainer, ItemSeleccionado, ItemsContainer, NombreEmpleado } from './ElegirEmpleadoStyles'
import { ContainerAll, ContainerPadre } from '../../Componentes/Contenedor/ContainerStyles'
import { TitleTurnos } from '../MisTurnos/MisTurnosStyles'
import empleado from '../../Imagenes/user.svg'
import { useDispatch, useSelector } from 'react-redux'
import {getEmpleados} from '../../Axios/axiosEmpleados'
import { useNavigate } from 'react-router-dom'
import { setEmpElegido } from '../../Redux/Slices/EmpleadoElegidoSlice'
import { getTurnosAsync } from '../../Redux/Slices/TurnosSlices'
import star from '../../Imagenes/service.svg'


const ElegirEmpleado = () => {
  const servSelect = useSelector((state) => state.servicioSeleccionado.ServicioSeleccionado)
  const {empleados, error} = useSelector(state => state.listaEmpleados);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servicioElegido = useSelector((state) => state.servicioSeleccionado.ServicioSeleccionado)

  useEffect(() => {
    dispatch(getTurnosAsync());
  }, [dispatch]);


  useEffect(() => {
    if(!empleados){
      getEmpleados(dispatch)
    }
  }, [empleados, error, dispatch])



  const handleSelectEmp = (nombre) => {
    dispatch(setEmpElegido(nombre));
    navigate('/elegirturno')
  }
  const empleadosFiltro = empleados ? empleados.filter(emp => emp.nombre === servicioElegido.profesional) : [];


  return (
    <>
      <ContainerPadre>
        <ContainerAll>
          <TitleTurnos>
            Elegi el profesional
          </TitleTurnos>
          <ItemsContainer>
            {
            servSelect ? (
              <ItemSeleccionado onClick={() => navigate('/servicios')}>
                <img src={star} alt="service"  />
                <h2>{servSelect.servicio}</h2>
              </ItemSeleccionado>
            ) : (
              null
            )
          }
          </ItemsContainer>
          
          <EmpleadosContainer >
          <EmpleadoOption style={{justifyContent:'start'}}  onClick={() => navigate('/elegirturno')}>
            <NombreEmpleado>
                  <img src={empleado} alt="empleado" />
                  <p>Primero disponible</p>
              </NombreEmpleado>
          </EmpleadoOption>
            { empleadosFiltro.length > 0 ? (
              empleadosFiltro.map(emp => (
                <EmpleadoOption onClick={() => handleSelectEmp(emp.nombre) }>
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