import React, { useState } from 'react';
import { ContainerBack, ContainerUser, InputStyleNavbar, NavbarContainer, NavbarMenu, NavbarOptions } from './NavbarStyles';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {setUser} from '../../Redux/Slices/TurnosObtenidosSlice'
import { FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const usuario = useSelector(state => state.user.currentUser);
  const [inputHidden] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleLogin = () => {
    toggleMenu(); 
    navigate('/login');
  }



  const registrateHandle =() => {
    navigate('/Registro');
     toggleMenu();
 }


 const ingresarHandle = () => {
    if (usuario === null) {
      toast.error('Correo no registrado');
    } else if (usuario && inputValue === usuario.email) {
      navigate('/Home');
      setIsOpen(false);
    } else if (inputValue === '') {
      toast.error('Debe completar con su correo');
    }
  }



  const cerrarSesionHandle = () => {
    dispatch(setUser(null));
    toggleMenu();
  }



  return ( 
    <>
      <NavbarContainer>
        <NavbarMenu className={isOpen ? 'open' : ''}>
          <NavbarOptions>
            <li style={!usuario ? { display: 'none' } : {}} onClick={cerrarSesionHandle}>Cerrar sesion</li>
            <li style={usuario ? { display: 'none' } : {}} onClick={handleLogin}>Inicia sesion</li>
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
                onClick={ingresarHandle}
              >
                Ingresar
              </Button>
            </li>
            <li style={usuario ? { display: 'none' } : {}} onClick={registrateHandle}>Registrate</li>
          </NavbarOptions>
        </NavbarMenu>
        <ContainerBack>

          {usuario ? (
            <IoHomeOutline className='icon' onClick={() => navigate('/home')}/>
          ):(
            ''
          )
            
            
          }
        </ContainerBack>
        <ContainerUser onClick={toggleMenu}>
          <FiUser className='iconUser' />
          <h2 className='login'>
            {usuario == null ? (
              <>Iniciar <span>sesion</span></>
            ) : (
              <>Hola <span className='gradiente'> {usuario.nombre}</span></>
            )}
          </h2>
        </ContainerUser>
        
      </NavbarContainer>
    </>
  );
};

export default Navbar;
