import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const mainColor = "#009250";

export const CustomHeadline = styled.div`
  font-size: xx-large;
  color: ${mainColor};
`;
export const CustomArticle = styled.div`
  font-size: large;
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
