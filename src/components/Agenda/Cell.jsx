import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { openModalDay } from "../../actions/Modal";
import { loadReminder } from "../../actions/Reminders";
import { weekDayConverter } from "../../utils/Date";
import { device } from "../../utils/responsive";

const Cell = ({ isWeekEnd, day, disabled }) => {
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();
  const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${day}`;
  const reminders = useSelector((state) => state.reminders)[formattedDate];
  const color = disabled ? "#ccc" : isWeekEnd ? "#2F74B5" : "#444";
  const currentDate = new Date(date.getFullYear(), date.getMonth(), day);

  return (
    <CellStyled
      data-testid="rw-cell-reminder"
      isWeekEnd={isWeekEnd}
      disabled={disabled}
      onClick={() => !disabled && dispatch(openModalDay(day))}
    >
      <WeekDay>{weekDayConverter[currentDate.getDay()]}</WeekDay>
      <span
        style={{ padding: "6px", fontWeight: "500", fontSize: "10px", color }}
      >
        {day}
      </span>
      <FlagList>
        {!disabled &&
          reminders &&
          reminders.map((reminder, index) => (
            <Flag
              data-testid="rw-flag-reminder"
              key={day + reminder.reminder + index}
              onClick={(e) => {
                e.preventDefault();
                dispatch(loadReminder(formattedDate, index));
                dispatch(openModalDay(day));
              }}
            >
              {`${reminder.hour}${reminder.period?.label || ""}: `}
              {reminder.reminder.substring(0, 8)}
              {reminder.reminder.length > 8 ? "..." : ""}
            </Flag>
          ))}
      </FlagList>
    </CellStyled>
  );
};

const CellStyled = styled.div`
  display: ${(props) => (props.disabled ? "none" : "table")};
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  margin: ${(props) => (props.isWeekEnd ? "-1px 0 0 0" : "-1px 0 0 -1px")};
  background: ${(props) => (props.isWeekEnd ? "#eee" : "white")};
  overflow: auto;
  word-break: break-all;

  @media ${device.tablet} {
    display: table;
    width: 115px;
    height: 100px;
  }
`;

const Flag = styled.div`
  margin: 2px;
  padding: 2px 4px;
  background: #2f74b5;
  color: #fff;
  font-size: 10px;
  cursor: pointer;
  border-radius: 2px;
`;
const FlagList = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  overflow: auto;
`;

const WeekDay = styled.div`
  display: table-header-group;
  text-align: center;
  background: #2f74b5;
  color: white;
  font-weight: bold;
  width: 100px;
  padding: 4px;
  width: 100%;

  @media ${device.tablet} {
    display: none;
  }
`;
export default Cell;
