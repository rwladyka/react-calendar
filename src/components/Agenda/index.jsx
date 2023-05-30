import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { getFirstDayOfMonth, getLastDayOfMonth } from "../../utils/Date";
import Cell from "./Cell";
import Header from "./Header";
import Line from "./Line";
import { device } from "../../utils/responsive";

const Agenda = () => {
  const date = useSelector((state) => state.date);
  const firstDay = getFirstDayOfMonth(date.getFullYear(), date.getMonth());
  const lastDay = getLastDayOfMonth(date.getFullYear(), date.getMonth());

  const days = Array.from(new Array(lastDay.getDate())).map((_, i) => ({
    day: i + 1,
    disabled: false,
  }));

  const lastDayOfLastMonth = getLastDayOfMonth(
    date.getFullYear(),
    date.getMonth() - 1
  );

  const disabledDaysBefore = Array.from(new Array(firstDay.getDay()))
    .map((_, i) => i)
    .reverse()
    .map((i) => ({ day: lastDayOfLastMonth.getDate() - i, disabled: true }));

  const disabledDaysAfterAll = Array.from(new Array(6 - lastDay.getDay())).map(
    (_, i) => ({ day: i + 1, disabled: true })
  );

  const all = [...disabledDaysBefore, ...days, ...disabledDaysAfterAll];

  return (
    <AgendaStyled>
      <Header />
      <Line>
        {all.map((item, i) => (
          <Cell
            isWeekEnd={(i + 1) % 7 === 0 || i % 7 === 0}
            disabled={item.disabled}
            day={item.day}
            key={i}
          />
        ))}
      </Line>
      <Line />
    </AgendaStyled>
  );
};

const AgendaStyled = styled.div`
  margin: 32px 16px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export default Agenda;
