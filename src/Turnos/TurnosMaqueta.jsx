import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OpcionesContainer, TurnosContainer, TurnosPadre } from './TurnosStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setConfirmado } from '../Redux/Slices/TurnoConfirmado';
import { eliminarTurnoSeleccionado } from '../Redux/Slices/TurnosSlices';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom/dist';
import { AgendarTurno } from '../Axios/axiosUser';

const TurnosMaqueta = ({ fecha, horario }) => {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user.currentUser);
  const [isRemoving, setIsRemoving] = useState(false);
  const navigate = useNavigate();
  const AgendarTurnosBD = async () => {
    const turnoData = {
      horario: horario,
      fecha: fecha,
      name: usuario.nombre,
      email: usuario.email,
      telefono: usuario.telefono,

    };
    try {
      await AgendarTurno(usuario, turnoData);
      navigate('/home');
    } catch (error) {
      alert('Error al crear la orden');
    }
  }

  const handleAgendarClick = () => {
    setIsRemoving(true);
    setTimeout(() => {
      dispatch(
        eliminarTurnoSeleccionado({
          fecha,
          horario,
        })
      );
      dispatch(setConfirmado({ usuario, fecha, horario  }));
      setIsRemoving(false);
    }, 300);
    setTimeout(() => {
      navigate('/Home')
    }, 1000)
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
              <OpcionesContainer onClick={() => {
                    handleAgendarClick();
                    AgendarTurnosBD();
                  }}>
                <h2 className='horario'>{horario}</h2>
              </OpcionesContainer>
            </TurnosContainer>
          </TurnosPadre>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TurnosMaqueta;
