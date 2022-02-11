import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { ImArrowLeft } from "react-icons/im";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: black solid 1px;
`;
export const Arrow = styled(TiArrowBack)`
  width: 20px;
  height: 15px;

  margin-right: 2px;
`;

export const Button = styled.button`
  margin: 5px 20px;
  padding: 5px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  background-color: #ff7777;

  :hover {
    background-color: #ff5555;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
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
  align-items: flex-start;
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
  :hover {
    color: #1e90ff;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ArrowInfo = styled(ImArrowLeft)`
  width: 20px;
  height: 15px;

  margin-right: 2px;
`;
