import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { device } from "../../utils/responsive";
import Loading from "../BasicComponents/Loading";
import Message from "../BasicComponents/Message";

const Daily = () => {
  const weather = useSelector((state) => state.weather);

  if (weather.loading)
    return (
      <WeatherStyled>
        <Loading />
      </WeatherStyled>
    );

  if (weather.error) {
    return <Message variant="danger">{weather.error}</Message>;
  }

  if (!weather.data) return <>No weather forecast</>;

  const { resolvedAddress, days } = weather.data;

  return (
    <WeatherStyled>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>{resolvedAddress}</div>
        <div>{days[0].conditions}</div>
      </div>
      <div style={{ fontSize: "30px" }}>{parseInt(days[0].dew)}&deg;C</div>
    </WeatherStyled>
  );
};

const WeatherStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 6px 16px;
  color: white;
  background: navy;
  width: 270px;
  margin: 16px 0px;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export default Daily;
