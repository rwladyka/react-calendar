import React from "react";

import styled from "styled-components";

import { device } from "../../utils/responsive";
import MonthSelector from "./MonthSelector";
import YearSelector from "./YearSelector";

const DateSelector = () => {
  return (
    <DateStyled>
      <MonthSelector />
      <YearSelector />
    </DateStyled>
  );
};

const DateStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 8px;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export default DateSelector;
