import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { findWeather } from "../../services/weatherService";
import { formatDate } from "../../utils/Date";
import Loading from "../BasicComponents/Loading";
import Message from "../BasicComponents/Message";

let timer;
function debounce(func, timeout = 400) {
  clearTimeout(timer);
  timer = setTimeout(func, timeout);
}

const Hourly = ({ city, day, reminderHour, period }) => {
  const date = useSelector((state) => state.date);
  const [weather, setWeather] = useState({ loading: true });
  const [currentCity, setCurrentCity] = useState(city);

  const showHour = ({ datetime }) => {
    const reminder = reminderHour?.split(":")[0];
    if (!reminder?.length || reminder?.length < 2) return true;
    if (
      parseInt(datetime.substring(0, 2)) ===
      parseInt(reminder) + (period?.value === "pm" ? 12 : 0)
    )
      return true;
    if (period?.value === "am" && parseInt(datetime.substring(0, 2)) === "00")
      return true;

    return false;
  };

  useEffect(() => {
    const getWeather = async () => {
      if (!currentCity?.length) {
        setWeather({
          data: undefined,
          loading: false,
          error: false,
        });
      }
      const formattedDate = formatDate(
        new Date(date.getFullYear(), date.getMonth(), day)
      );
      try {
        const data = await findWeather(currentCity, formattedDate);

        setWeather({
          data: data,
          loading: false,
          error: false,
        });
      } catch (e) {
        setWeather({
          loading: false,
          error: e.message,
          data: undefined,
        });
      }
    };
    getWeather();
  }, [currentCity, day, date]);

  useEffect(() => {
    setWeather({
      loading: true,
      error: false,
      data: undefined,
    });
    debounce(() => setCurrentCity(city));
  }, [city]);

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
          margin: "4px 0",
        }}
      >
        <label style={{ fontWeight: "bold", margin: "4px 0" }}>
          {resolvedAddress}
        </label>
        <div>
          {days[0].hours.filter(showHour).map((hour) => (
            <div key={hour.datetime}>
              <strong>{hour.datetime.substring(0, 5)}</strong>
              {" - "}
              {hour.conditions}, {parseInt(hour.dew)}&deg;C
            </div>
          ))}
        </div>
      </div>
    </WeatherStyled>
  );
};

const WeatherStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  color: #333;
  width: 280px;
  margin: 36px 0;
  height: 160px;
  overflow: auto;
`;

export default Hourly;
