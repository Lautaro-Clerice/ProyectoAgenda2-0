import React from 'react'
import { AgendasContainer, ContainerAll, ContainerDispo, ContainerPadre, DispoTurnos, TitleAgenda } from '../../Componentes/Contenedor/ContainerStyles'
import Calendario from '../../Componentes/Calendario/Calendario'
import { useDispatch, useSelector } from 'react-redux';
import LogoCliente from "../../Imagenes/BecaShop.png";
import { ImgMobile, LogoMobile } from '../Home/HomeStyles';
import { ItemSeleccionado, ItemsContainer } from '../ElegirEmpleado/ElegirEmpleadoStyles';
import emp from '../../Imagenes/user.svg'
import star from '../../Imagenes/service.svg'
import { useNavigate } from 'react-router-dom';
const ElegirTurno = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usuario = useSelector(state => state.user.currentUser);
    const servSelect = useSelector((state) => state.servicioSeleccionado.ServicioSeleccionado)
    const empSelect = useSelector((state) => state.empleadoSeleccionado.EmpleadoSeleccionado)
  return (
      <ContainerPadre>
        <ContainerAll>
          <ImgMobile>
                <LogoMobile src={LogoCliente} />
                </ImgMobile>
            <AgendasContainer>
              <ContainerDispo>
                <TitleAgenda>
                  <h2>Elegi tu turno!</h2>
                </TitleAgenda>
                <ItemsContainer style={{marginBottom:'20px'}}>
                  {
                  servSelect ? (
                    <>
                    <ItemSeleccionado onClick={() => navigate('/servicios')}>
                      <img src={star} alt="service"  />
                      <h2>{servSelect.servicio}</h2>
                    </ItemSeleccionado>
                    <ItemSeleccionado onClick={() => navigate('/elegir')}>
                      <img src={emp} alt="empleado"  />
                      <h2>{empSelect}</h2>
                    </ItemSeleccionado>
                    </>
                    
                  ) : (
                    null
                  )
                }
                </ItemsContainer>
                <DispoTurnos>
                  {usuario !== null ? (
                    <Calendario />
                  ) : (
                    "nada"
                  )}
                </DispoTurnos>
              </ContainerDispo>
            </AgendasContainer>
          </ContainerAll>
        </ContainerPadre>
  )
}

export default ElegirTurno