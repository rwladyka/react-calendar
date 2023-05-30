import React from "react";

import styled from "styled-components";

import { useIsMobile } from "../../hooks/useIsMobile";
import { device } from "../../utils/responsive";

const Header = () => {
  const isMobile = useIsMobile();
  if (isMobile) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "#2F74B5",
        width: "100%",
      }}
    >
      <HeaderStyled>Sunday</HeaderStyled>
      <HeaderStyled>Monday</HeaderStyled>
      <HeaderStyled>Tuesday</HeaderStyled>
      <HeaderStyled>Wednesday</HeaderStyled>
      <HeaderStyled>Thursday</HeaderStyled>
      <HeaderStyled>Friday</HeaderStyled>
      <HeaderStyled>Saturday</HeaderStyled>
    </div>
  );
};

const HeaderStyled = styled.div`
  text-align: center;
  background: #2f74b5;
  color: white;
  font-weight: bold;
  width: 100px;
  padding: 4px;
`;

export default Header;
