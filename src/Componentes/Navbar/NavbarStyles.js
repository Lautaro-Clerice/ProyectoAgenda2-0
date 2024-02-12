import styled from "styled-components";
import {
    colorPrincipal,colorTemplado
} from "../../UX/Colors";

export const NavbarContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 75px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    z-index: 111111111111;
    @media (max-width: 600px) {
        justify-content: space-between;
        height: 60px;
        padding: 0px 10px;
        align-items: center;
    }
`;
export const ContainerBack = styled.div`
    width: 100px;
    display:flex ;
    gap: 10px;
    align-items: center;
    h2{
        color: ${colorPrincipal};
    }

    .FaArrowLeftLong{
        color: ${colorPrincipal};
    }
    .icon{
        color:black;
        font-size:28px;
        margin-left:10px;
    }
`
export const LogoCliente = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    @media (max-width: 600px) {
        display: none;
    }
`;
export const NavbarMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    background-color: white;
    position: fixed;
    border-radius: 5px;
    top: 60px;
    left: 0;
    z-index: 111111111111;
    transform: translateX(-100%);
    opacity: 0;
    transition: 0.3s;
    &.open {
        transform: translateX(0);
        opacity: 1;
    }
    @media(min-width:600px){
        width: 20%;
        left: 20%;
        top: 59px;
    }
`;
export const ContainerUser = styled.div`
    width: 160px;
    border-radius: 12px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    .iconUser {
        color: black;
        width: 25px;
        height: 25px;
    }
    .gradiente {
        background: linear-gradient(to right, #8A2BE2, #800080, #9932CC);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }
    .login {
        color: black;
font-size: 18px;
        span {
            color: black;
            display: inline-block;
        }
    }
    @media (max-width: 600px) {
        display: flex;

    }
`;
export const NavbarOptions = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 20px;
    margin-top: 30px;
    li {
        color: ${colorTemplado};
        font-size: 18px;

        img {
            width: 32px;
            height: 32px;
        }
    }
`;

export const InputStyleNavbar = styled.input`
    color: black;
    font-size: 20px;
    padding: 10px;
    min-width: 100px;
    text-align: start;
    width: 80%;
    box-sizing: border-box;
    border: none;
    border-radius: 3px;
    background-color: white;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-100%);
    height: 40px;
    position: absolute;
    &:focus {
        border: none;
        box-shadow: 0px 0px 10px pink;
        outline: none;
    }
    &.visibleInput {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        position: relative;
    }
`;
