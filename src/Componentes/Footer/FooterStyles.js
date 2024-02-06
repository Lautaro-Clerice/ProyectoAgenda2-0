import styled from "styled-components";
import {colorTerciario } from "../../UX/Colors";

export const  ContainerFooterStyles = styled.footer`
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    address {
        color: black;
        font-size:16px;
        text-align: center;
    }
    @media (max-width: 600px){
        height: 120px;
        flex-direction: column;
        gap: 15px;
    }
`
export const LogoFooterContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    p{
        font-size: 22px;
        font-weight: 400;
        color: white;
        font-family: 'Dancing Script', cursive !important;
        color: ${colorTerciario};
    }
    img {
        border-radius: 50%;
        width: 60px;
        height: 60px;
    }
`
export const IconStyles = styled.div`
    display:flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    a{
        background-color: white;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        display:flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #b5b5b5bd;
        transition: .3s;
        &:hover {
            background-color: white;
            border: 0.05px solid ${colorTerciario};
            .wsp {
                color: ${colorTerciario};
            }
        }

    }
    .wsp {
        color: #000000c4;
        font-size: 26px;
        transition: .3s;
        
    }
`