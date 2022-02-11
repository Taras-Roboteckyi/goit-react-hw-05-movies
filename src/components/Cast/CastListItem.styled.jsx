import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -30px;
  padding-top: 30px;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 200px;

  margin-left: 30px;
  margin-top: 30px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  :hover {
    background-color: royalblue;
    color: white;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.1);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Name = styled.p`
  text-align: center;
  padding: 5 px;
  margin-top: 0px;
  margin-bottom: 10px;
`;
export const Сharacter = styled.p`
  text-align: center;
  margin: 0;
  padding-bottom: 5px;
`;
export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TextInfo = styled.p`
  text-align: center;
  color: gray;
`;
