import styled from "styled-components";
import { colorBorders } from "../../UX/Colors";


export const ContainerInput = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 30px;
    .form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        width: 80%;
    }

`

export const InputStyleCodigo = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid ${colorBorders};
    border-radius: 9px;
    &::placeholder{
        margin-left: 5px;
    }
`