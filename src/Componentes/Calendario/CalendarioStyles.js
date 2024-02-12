import styled from "styled-components";
import {colorBorders, colorTemplado } from "../../UX/Colors";

export const CalendarioPadre = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .icon {
    font-size: 24px;
    color: #DB4ECF;
  }
`
export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
    
  .iconCalendar {
    color: white;
    font-size: 24px;
    align-self: center;
  }

  .react-calendar {
    max-width: 300px;
    width: 100%;
    height: 250px;
    font-size: 12px; 
    margin-top: 10px;
  }
`;

export const BotonCalendario = styled.div`
    height: 50px;
    width: 170px;
    border: none;
    background-color: white;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid ${colorBorders};
`

export const ContainerTurnosDispo = styled.div`
  display:flex;
  flex-wrap:wrap ;
  gap: 10px;
  justify-content: center;
  align-items: center;
  p{
    color: ${colorTemplado};
    margin-top: 100px;
    text-align: center;
  }
`