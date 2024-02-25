import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import TurnosMaqueta from '../../Turnos/TurnosMaqueta';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BotonCalendario, CalendarContainer, CalendarioPadre, ContainerTurnosDispo } from './CalendarioStyles';
import { getTurnosAsync } from '../../Redux/Slices/TurnosSlices';
import { format } from 'date-fns';

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [turnosFechaSeleccionada, setTurnosFechaSeleccionada] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const allTurnosDisponibles = useSelector((state) => state.turnos.turnos.data);
  const {EmpleadoSeleccionado} = useSelector(state => state.empleadoSeleccionado);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTurnosAsync());
  }, [dispatch]);

  useEffect(() => {
    const formattedSelectedDate = format(selectedDate, 'yyyy-MM-dd');
    const turnosFiltradosPorEmpleado = allTurnosDisponibles.filter(turno => turno.empleado === EmpleadoSeleccionado);
    const turnosParaFechaSeleccionada = turnosFiltradosPorEmpleado.filter(turno => turno.fecha === formattedSelectedDate && turno.status !== 'Ocupado');
    setTurnosFechaSeleccionada(turnosParaFechaSeleccionada);
  }, [selectedDate, allTurnosDisponibles, EmpleadoSeleccionado]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <CalendarioPadre>
      <div style={{ position: 'relative' }}>
        <BotonCalendario onClick={toggleCalendar}>
          <FaRegCalendarAlt className='icon' />
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
            <TurnosMaqueta key={turno._id} id={turno.id} fecha={turno.fecha} horario={turno.horario} empleado={turno.empleado} />
          ))
        ) : (
          <p>No hay turnos disponibles para la fecha seleccionada</p>
        )}
      </ContainerTurnosDispo>
    </CalendarioPadre>
  );
};

export default Calendario;
