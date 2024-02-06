import styled from "styled-components";
import { colorCuarto, colorPrincipal, colorTemplado } from "../../UX/Colors";

export const TitleTurnos = styled.div`
    display: flex;
    flex-direction: start;
    margin-left: 15px;
    width: 100%;
    margin-top: 100px;
    h2{
        text-align: start;
        width: 100%;
        font-weight: 600;
        font-size: 25px;
        color: white;
    }
    span {
      background: linear-gradient(to left, ${colorPrincipal}, ${colorCuarto});
      -webkit-background-clip: text;
            background-clip: text; 
      color: transparent;
      display: inline-block;
    }
    
`

export const AgendasContainerTurnos = styled.div`
    width: 95%;
    height: 200px;
    border-radius: 9px;
    display: flex;
    justify-content: start;
    gap:5px;
    flex-direction: column;
    margin-top: 15px;
`
export const TurnoFechaContainer = styled.div`  
    width:100% ;
    height: 40px;
    align-self: start;
    display: flex;
    padding: 10px;
    .title{
        font-size: 20px;
        color: #48fe91;
    }
    .turno {
        color:black;
        font-size: 16px;
        font-weight: 500;
    }
    
`
export const ObservacionesContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: start;
    gap: 5px;
    .title{
        color: #de4545;
        font-size: 20px;
    }
    .observacion{
        margin-left: 10px;
        color: ${colorTemplado};
        font-size: 14px;
        text-align: start;
    }
`
export const ContainerBotones = styled.div`
    width: 100%;
    height: 55px;
    align-items: center;
    display: flex;
    gap: 15px;

`

export const EliminarTurno = styled.button`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #ee2f2f;
    border-radius: 8px;
    width: 44%;
    height: 40px;
    color: white;
    font-weight: 500;
    font-size: 14px;
    box-shadow: 0px 0px 4px #404040b5;
`
export const CambiarTurno = styled.button`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #2f82ee;
    border-radius: 8px;
    width: 44%;
    height: 40px;
    color: white;
    font-weight: 500;
    font-size: 14px;
    box-shadow: 0px 0px 4px #404040b5;
`

export const SinTurnoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;
    .BotonAgregar{
        width: 90%;
        margin-bottom: 20px;
        display:flex;
        gap: 8px;
        .icon{
            color: white;
            font-size: 22px;
        }
    }
    
`