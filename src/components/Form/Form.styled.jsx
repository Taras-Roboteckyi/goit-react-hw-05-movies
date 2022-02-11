import styled from "styled-components";

export const Form = styled.form`
  border-color: black;

  padding: 10px;
  display: flex;
  //flex-direction: column;
  align-items: flex-start;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
`;
export const Label = styled.label`
  /*  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500; */
`;

export const Input = styled.input`
  margin-right: 10px;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 400;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 5px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  background-color: yellow;

  :hover {
    color: white;
    background-color: royalblue;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
