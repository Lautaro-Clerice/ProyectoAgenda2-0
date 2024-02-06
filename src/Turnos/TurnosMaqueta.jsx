import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OpcionesContainer, TurnosContainer, TurnosPadre } from './TurnosStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setConfirmado } from '../Redux/Slices/TurnoConfirmado';
import { eliminarTurnoSeleccionado } from '../Redux/Slices/TurnosSlices';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom/dist';

const TurnosMaqueta = ({ fecha, horario }) => {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user.currentUser);
  const [isRemoving, setIsRemoving] = useState(false);
  const navigate = useNavigate();
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
                  }}>
                <p>{horario}</p>
              </OpcionesContainer>
            </TurnosContainer>
          </TurnosPadre>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TurnosMaqueta;
