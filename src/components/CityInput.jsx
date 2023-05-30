import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { setCity } from "../actions/City";
import { loadWeather } from "../actions/Weather";
import Button from "./BasicComponents/Button";
import InputText from "./BasicComponents/InputText";

const CityInput = () => {
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => dispatch(setCity(target.value));

  const handleWeater = () => {
    if (!city) return;
    dispatch(setCity(city));
    dispatch(loadWeather(city));
  };

  return (
    <Styled>
      <InputText
        id="rw-calendar-city"
        name="city"
        label="City"
        value={city}
        placeholder="Type your city"
        onChange={handleChange}
      />
      <ButtonStyle>
        <Button onClick={handleWeater}>Find</Button>
      </ButtonStyle>
    </Styled>
  );
};

const Styled = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonStyle = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px 8px 0;
`;

export default CityInput;
