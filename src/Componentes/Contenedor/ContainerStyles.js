import { Form } from 'formik'
import styled from 'styled-components'
export const ContainerPadre = styled.div`
    display: flex;
    justify-content: center;
`
export const ContainerAll = styled.div`
    justify-self: center;
    width: 60%;
    height: auto;
    overflow: hidden;
    justify-content:center;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    @media (max-width:600px){
        justify-content: start;
        width: 100%;
    }
`
export const AgendasContainer = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 9px;
    display: flex;
    gap:5px;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    background-color: white;
    .check {
        width: 220px;
        height: 220px;
        color:#01f926 ;
        margin-top: -50px;
        
        
    }
    @media (max-width: 600px) {
        width:100%;
    }
`
export const DatosTurno = styled.div`
    width:auto;
    height: 90%;
    display: flex;
    gap:5px;
    flex-direction: column;
    align-items: center;

`
export const TitleAgenda = styled.div`
    width: 100%;
    height:60px;
    margin-bottom: 30px;
    h2{
        text-align: center;
        width: 100%;
        font-size: 22px;
    }

`
export const FormContacto = styled(Form)`
    display:flex;
    flex-direction:column;
    width: 90%;
    gap:10px;
    align-content: start;
    height: 800px;
    padding-top: 0;
`
export const LabelStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const InputStyles =  styled.input`
    width: 80%;
    height: 40px;
    border-radius: 9px;
`
export const DispoTurnos = styled.div`
    width:100%;
    height: 80%;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap:20px;
    margin-right: 10px;
    overflow: auto;
`
export const ContainerDispo = styled.div`
    width:90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    .mostrar {
        display: flex !important;
    }
`