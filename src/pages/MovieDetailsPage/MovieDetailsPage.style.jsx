import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

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

export const List = styled.ul`
  padding-bottom: 10px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  border-bottom: black solid 1px;
`;

export const Title = styled.h3`
  margin: 0;
  padding-top: 10px;
  padding-left: 20px;
`;

export const LinkAdd = styled(NavLink)`
  display: block;
  color: black;
  text-decoration: none;
  padding-left: 5px;
  &.active {
    color: red;
  }
`;
