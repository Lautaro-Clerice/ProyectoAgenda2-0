import styled from "styled-components";


export const ContainerRegistro = styled.div`
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
        height: auto;
    }
`

export const FormRegistro = styled.div`
     width: 50%;
    height: 500px;
    border-radius: 9px;
    display: flex;
    gap:5px;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    background-color: white;
    margin-bottom: 30px;
    .check {
        width: 220px;
        height: 220px;
        color:#01f926 ;
        margin-top: -50px;
        
        
    }
    @media (max-width: 600px) {
        width:90%;
    }
`