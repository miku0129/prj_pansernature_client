import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const mainColor = "#009250";
const mainColorReverse = "white";

export const CustomHeadline = styled.div`
  font-size: xx-large;
  color: ${mainColor};
`;
export const CustomArticle = styled.div`
  font-size: large;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;

export const CustomBtn = styled.button`
  height: 3rem;
  background-color: ${mainColor};
  border: transparent;
  color: ${mainColorReverse};
  border-radius: 5px;
  padding: 1rem;
  &:hover {
    background-color: ${mainColorReverse};
    border: solid 1px ${mainColor};
    color: ${mainColor};
  }
`;

export const HeaderAndFooterLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const CustomHashLink = styled(HashLink)`
  text-decoration: none;
  color: initial;
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
