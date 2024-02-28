import styled from "styled-components";
import { colorTemplado } from "../../UX/Colors";


export const EmpleadosContainer =  styled.div`
margin-top: 40px;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items:start;
    justify-content: start;
    margin-left: 40px;
    gap: 15px;


`

export const EmpleadoOption = styled.div`
    width: 60% ;
    height: 50px;
    border: 1px solid #9e9e9eba;
    border-radius:10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    .rol{
        margin-right: 10px;
        background: linear-gradient(to right, #8A2BE2, #800080, #9932CC);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    cursor: pointer;
    
`

export const NombreEmpleado = styled.div`
    display: flex;
    gap: 20px;
`

export const ItemSeleccionado = styled.div`
    margin-left: 30px;
    width:100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid ${colorTemplado};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h2{
        color: ${colorTemplado};
        font-size: 14px;
    }
`

export const ItemsContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: start;
`