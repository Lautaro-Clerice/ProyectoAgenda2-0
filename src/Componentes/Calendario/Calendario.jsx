import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector} from 'react-redux';
import TurnosMaqueta from '../../Turnos/TurnosMaqueta';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BotonCalendario, CalendarContainer, ContainerTurnosDispo } from './CalendarioStyles';
import { colorTemplado } from '../../UX/Colors';

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [turnosFechaSeleccionada, setTurnosFechaSeleccionada] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const turnosDisponibles = useSelector((state) => state.turnos.turnos);

  useEffect(() => {
    const turnos = turnosDisponibles.filter((turno) => {
      return turno.fecha === selectedDate.toISOString().split('T')[0];
    });
    setTurnosFechaSeleccionada(turnos);
  }, [selectedDate, turnosDisponibles]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Cerrar el calendario al seleccionar una fecha
    setShowCalendar(false);
  };

  
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
      <div style={{ position: 'relative' }}>
        <BotonCalendario onClick={toggleCalendar}>
          <FaRegCalendarAlt style={{ fontSize: '24px', color: '#DB4ECF' }} />
          <p>Elegi una fecha...</p>
        </BotonCalendario>
        {showCalendar && (
          <CalendarContainer>
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </CalendarContainer>
        )}
      </div>
        <ContainerTurnosDispo>
          {turnosFechaSeleccionada.length > 0 ? (
                  turnosFechaSeleccionada.map((turno) => (
                    <TurnosMaqueta key={turno.id} fecha={turno.fecha} horario={turno.horario} />
                  ))
                ) : (
                  <p style={{ color: colorTemplado, marginTop: '100px', textAlign: 'center' }}>
                    No hay turnos disponibles para la fecha seleccionada
                  </p>
                )}
        </ContainerTurnosDispo>
      
    </div>
  );
};

export default Calendario;
