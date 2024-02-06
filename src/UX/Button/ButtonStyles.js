import styled from "styled-components";


export const ButtonStyles = styled.div`
    width: 120px;
    height: 37px;
    box-shadow: 0px 0px 8px #d4a5fd;
    border: none;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:9px;
    background-color: #e4c1f9;
    color: white;
    cursor:pointer;
    transition: .4s;
    &:hover {
        transform: scale(1.02);
    }
`