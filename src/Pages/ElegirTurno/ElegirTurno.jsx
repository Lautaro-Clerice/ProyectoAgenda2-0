import React from 'react'
import { AgendasContainer, ContainerAll, ContainerDispo, ContainerPadre, DispoTurnos, TitleAgenda } from '../../Componentes/Contenedor/ContainerStyles'
import Calendario from '../../Componentes/Calendario/Calendario'
import { useSelector } from 'react-redux';
import LogoCliente from "../../Imagenes/BecaShop.png";
import { ImgMobile, LogoMobile } from '../Home/HomeStyles';
const ElegirTurno = () => {
    const usuario = useSelector(state => state.user.currentUser);
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