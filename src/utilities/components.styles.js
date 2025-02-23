import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const HeaderAndFooterLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;

export const CustomHashLink = styled(HashLink)`
  text-decoration: none;
  color: initial;
`;

export const CustomBtn = styled.button`
  background-color: #009250;
  border: none;
  color: white;
  border-radius: 5px;
  height: 30px;
  max-width: 150px;

  &:hover {
    background-color: white;
    color: #009250;
    border: solid 1px #009250;
  }
`;

export const CustomBtnSayYes = styled(CustomBtn)`
  background-color: white;
  color: #e06a3b;
  border: solid 1px #e06a3b;
  border-radius: 5px;
  height: 40px;
  max-width: 150px;

  &:hover {
    background-color: #e06a3b;
    border: none;
    color: white;
  }
`;

export const CustomBtnGroup = styled.div`
  margin: 20px;
  display: flex;
  gap: 10px;
`;

export const ContentLayout = styled.div`
  padding: 20px;
`;
