import styled from "styled-components";

export const InputBorderStyle = styled.div`
  display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const InputLabelStyled = styled.label`
	font-size: 1rem;
	display: flex;
  color: white;
`;

export const InputStyle = styled.input`
    padding: 10px;
  text-align: start;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #919191a6 ;
  border-radius: 3px;
  background-color: white;
  transition: .3s;
  &:focus {
    border: none;
    box-shadow: 0px 0px 10px pink;
    outline: none;
  }
  
  `
export const ErrorStyled = styled.span`
padding-left: 5px;
color: red;
`;