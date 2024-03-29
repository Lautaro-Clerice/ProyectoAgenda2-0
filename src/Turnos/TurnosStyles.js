import styled from "styled-components";
import { colorBorders, colorTemplado } from "../UX/Colors";


export const TurnosContainer = styled.div `
    width:100%;
    min-height: 50px;
    margin-top:20px;
    background-color: white;
    border-radius: 9px;
    display: flex;
    @media (max-width: 600px){
        display: flex;
        flex-wrap: wrap;
    }
`

export const OpcionesContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 50px;
    border: 1px solid ${colorBorders};
    border-radius: 9px;
    .horario{
        align-self: center;
        height:24px;
        font-size:14px;
        font-weight: 500;
        color: ${colorTemplado};
    }

`

export const TurnosPadre = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    transition: .3s;
    &:hover {
        transform: scale(1.02);
    }
`