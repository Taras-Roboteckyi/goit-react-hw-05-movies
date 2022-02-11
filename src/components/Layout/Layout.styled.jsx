import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 10px 5px;
  border-bottom: black solid 1px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding-left: 20px;
  &.active {
    color: red;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover {
    color: blue;
  }
`;

export const ButtonContactStyle = styled.button`
  padding: 5px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  background-color: gold;

  :hover {
    background-color: royalblue;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
