import React, { useState } from 'react';
import { ContainerBack, ContainerUser, InputStyleNavbar, NavbarContainer, NavbarMenu, NavbarOptions } from './NavbarStyles';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {setUser} from '../../Redux/Slices/TurnosObtenidosSlice'
import { FiUser } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const usuario = useSelector(state => state.user.currentUser);
  const [inputHidden, setInputHidden] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarMenu className={isOpen ? 'open' : ''}>
          <NavbarOptions>
            <li style={!usuario ? { display: 'none' } : {}} onClick={() => {dispatch(setUser(null));toggleMenu()} }>Cerrar sesion</li>
            <li style={usuario ? { display: 'none' } : {}} onClick={() => setInputHidden(true)}>Inicia sesion</li>
            <li style={usuario ? { display: 'none' } : {}}>
              <InputStyleNavbar
                className={inputHidden ? 'visibleInput' : ''}
                placeholder='Correo Electronico'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
                <Button
                color='secondary'
                style={{
                  width: '130px',
                  opacity: inputHidden ? '1' : '0',
                  transform: inputHidden ? 'scale(1)' : 'scale(0.5)',
                  transition: '0.3s'
                }}
                onClick={() => {
                  if (usuario === null) {
                    toast.error('Correo no registrado');
                  } else if (usuario && inputValue === usuario.email) {
                    navigate('/Home');
                    setIsOpen(false);
                  } else if (inputValue === '') {
                    toast.error('Debe completar con su correo');
                  }
                }}
              >
                Ingresar
              </Button>
            </li>
            <li style={usuario ? { display: 'none' } : {}} onClick={() => {navigate('/Registro'); toggleMenu()}}>Registrate</li>
          </NavbarOptions>
        </NavbarMenu>
        <ContainerBack>
          <FaArrowLeftLong className='FaArrowLeftLong'/>
          <h2>Volver</h2>
        </ContainerBack>
        <ContainerUser onClick={toggleMenu}>
          <FiUser className='iconUser' />
          <h2 className='login'>
            {usuario == null ? (
              <>Iniciar <span>sesion</span></>
            ) : (
              <>Hola <span> {usuario.name}</span></>
            )}
          </h2>
        </ContainerUser>
        
      </NavbarContainer>
    </>
  );
};

export default Navbar;
