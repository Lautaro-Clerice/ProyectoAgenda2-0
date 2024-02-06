import styled from "styled-components";
import imgInicio from '../../Imagenes/descarga.webp'
import {colorPrincipal} from '../../UX/Colors'
export const ReservarHomeContainer = styled.div`
    @media (min-width:601px){
        display: flex;
    width: 90%;
    height: 50px;
    flex-direction: column;
    align-items: center;
    h3{
        color: white;
        font-size: 20px;

    }
    }
    display: none;
    
`

export const ContainerBotonesHome  = styled.div`
    @media (min-width:601px){
      margin-top: 30px;
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    }
    @media (min-width:100px){
        width: 100%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        button{
            font-size: 15px;
            color: black;
            border: 1px solid #9f9999a1;
            border-radius: 8px;
            width: 80% !important;
            height: 60px;
        }
    }
   

`

export const InputHomeContainer = styled.div`
    @media (min-width:601px){
      display: flex ;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    margin-top: 120px;
    width: 90%;
    }
    @media (min-width:100px){
        display: flex ;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    margin-top: 120px;
    width: 90%;
    transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.7);
  
  
  &.visibleInput {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
}

    

`
export const ContainerHome =styled.div`
@media (min-width:601px){
      display: flex;
    flex-direction: column;
    width: 50%;
    height: 500px;
    border-radius: 9px;
    display: flex;
    gap:5px;
    flex-wrap: wrap;
    align-items: center;
    background-color: #27293D;
    }
    display: none;
    
    @media (max-width: 600px) {
        width:90%;
    }
`

export const InputStyleHome = styled.input`
    @media (min-width:601px){
       padding:10px;
    min-width:140px;
    text-align: start;
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: white;
    transition: .3s;
    opacity: 0;
    transform:scale(0.7);
    &:focus {
    border: none;
    box-shadow: 0px 0px 10px pink;
    outline: none;
  }
  &.visibleInput {
    transform: scale(1);
    opacity: 1;
  }
    }
    @media (min-width:100px) {
  padding: 10px;
  min-width: 140px;
  text-align: start;
  width: 90%;
  box-sizing: border-box;
  border: 1px solid #9f9999a1;
  border-radius: 3px;
  background-color: white;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.7);
  margin-top: -60px;
  &:focus {
    border: none;
    box-shadow: 0px 0px 10px pink;
    outline: none;
  }
  
  &.visibleInput {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
}
   
`

export const ImgMobile = styled.div`
    @media (min-width:100px) {
        width:100% ;
    height: 150px;
    background-image: url(${imgInicio});
    display: flex;
    justify-content: center;

    }
    background-position: center;
    background-size: cover;
    background-position:bottom;
    margin: 60px;
    @media (min-width:600px){
        height: 250px;
    }
`

export const LogoMobile = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin-top: 100px;
    @media (min-width: 600px){
        margin-top: 200px;
        width: 150px;
        height: 150px;
    }

`
export const TitleMobile = styled.div`
    @media (min-width:100px){
        h2{
            color: black ;
        }
        span{
            color: ${colorPrincipal};
        }
    }
    @media (min-width: 600px){
        margin-top: 40px;
    }
`