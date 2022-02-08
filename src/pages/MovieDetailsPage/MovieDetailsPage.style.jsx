import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: black solid 1px;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
`;

export const LinkButton = styled(Link)`
  color: black;
  text-decoration: none;
`;
