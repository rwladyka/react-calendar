import React from "react";

import styled from "styled-components";

import { device } from "../utils/responsive";
import CityInput from "./CityInput";
import Daily from "./Forecast/Daily";

const Forecast = () => {
  return (
    <ForecastStyled>
      <CityInput />
      <Daily />
    </ForecastStyled>
  );
};

const ForecastStyled = styled.div`
  display: none;
  justify-content: space-between;
  padding: 8px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export default Forecast;
