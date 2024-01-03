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
