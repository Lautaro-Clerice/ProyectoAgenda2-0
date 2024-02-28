import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OpcionesContainer, TurnosContainer, TurnosPadre } from './TurnosStyles';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom/dist';
import { AgendarTurno } from '../Axios/axiosUser';
import { ocuparTurnoLibre } from '../Axios/AxiosTurnos';
import Loader from '../UX/Loader/Loader'
import { colorTemplado } from '../UX/Colors';
const TurnosMaqueta = ({ fecha, horario, id , empleado}) => {
  const usuario = useSelector((state) => state.user.currentUser);
  const servicioElegido = useSelector((state) => state.servicioSeleccionado.ServicioSeleccionado)

  const [isRemoving, setIsRemoving] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  
  const AgendarTurnosBD = async () => {
    if (isButtonDisabled) return; 
    
    const turnoData = {
      horario: horario,
      fecha: fecha,
      empleado:empleado,
      name: usuario.nombre,
      email: usuario.email,
      telefono: usuario.telefono,
      servicio: servicioElegido.servicio,
      precio: servicioElegido.precio,
    };
    
    try {
      setIsButtonDisabled(true); 

      await Promise.all([
        AgendarTurno(usuario, turnoData),
        ocuparTurnoLibre(id),
      ]);
      setTimeout(() => {
        console.log(id);
        navigate('/Home');
      }, 1000);
    } catch (error) {
      alert('Error al crear la orden');
      setIsButtonDisabled(false); 
    }
  };

  return (
    <AnimatePresence mode='wait'> 
      {!isRemoving && (
        <motion.div
          key={`${fecha}-${horario}`}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <TurnosPadre>
            <TurnosContainer>
              <OpcionesContainer onClick={AgendarTurnosBD} disabled={isButtonDisabled}>
                {isButtonDisabled ? (
                  <Loader styles={{borderColor:colorTemplado}} />
                ) : (
                  <h2  className='horario'>{horario}</h2>
                )
                }
              </OpcionesContainer>
            </TurnosContainer>
          </TurnosPadre>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TurnosMaqueta;
