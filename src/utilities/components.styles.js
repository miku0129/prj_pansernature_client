import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const mainColor = "#009250";
const yesColor = "#e06a3b";

export const CustomHeadline = styled.div`
  font-size: xx-large;
  color: ${mainColor};
`;
export const CustomArticle = styled.div`
  font-size: large;
`;

export const CustomBtn = styled.button`
  height: 3rem;
  background-color: ${mainColor};
  border: transparent;
  color: white;
  border-radius: 5px;
  padding: 1rem;
  &:hover {
    background-color: white;
    border: solid 1px ${mainColor};
    color: ${mainColor};
  }
`;

export const CustomBtnCancel = styled(CustomBtn)`
  background-color: white;
  border: solid 1px ${yesColor};
  color: ${yesColor};

  &:hover {
    background-color: ${yesColor};
    border: transparent;
    color: white;
  }
`;

export const CustomBtnGroup = styled.div`
  margin: 20px;
  display: flex;
  gap: 10px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;

export const CustomHashLink = styled(HashLink)`
  text-decoration: none;
  color: initial;
`;
