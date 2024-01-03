import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderAndFooterLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;

export const CustomBtn = styled.button`
  background-color: #009250;
  border: none;
  color: white;
  border-radius: 5px;
  width: 60px;
  height: 30px;

  &:hover {
    background-color: white;
    color: #009250;
    border: solid 1px #009250;
  }
`;