import styled from "styled-components";
import {
    colorPrincipal,
    colorTemplado,
} from "../../UX/Colors";

export const TitleHomeUser = styled.div`
    align-self:start;
    margin-left: 10px;
    h2{
        color: black;
        font-size: 26px;
        font-weight: 500;
        
    }
    p{
        color: ${colorTemplado};
        font-size: 14px;
        
    }
    @media (min-width: 600px){
        margin-top: 30px;
    }
`

export const TurnosProximos= styled.div`
    width: 100%;
    height: 40px;
    margin-top:15px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    p {
        padding-left: 10px;
        width: 150px;
        height: 50px;
        display: flex;
        color: ${colorPrincipal};
        margin-left: 15px;
        border-bottom: 1px solid ${colorPrincipal};
    }
`

export const TurnosContainer = styled.div`
    display: flex;
    justify-content: center;
`