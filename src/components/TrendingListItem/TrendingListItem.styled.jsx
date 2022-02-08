import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListItemStyle = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const LinkStyle = styled(Link)`
  padding: 5px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 400;

  :hover {
    background-color: royalblue;
    color: white;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
