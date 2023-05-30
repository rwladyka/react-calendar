import React from "react";

import Agenda from "../components/Agenda";
import Title from "../components/BasicComponents/Title";
import DateSelector from "../components/DateSelector";
import Forecast from "../components/Forecast";
import ModalReminder from "../components/Modal/ModalReminder";

function Calendar() {
  return (
    <div className="container">
      <Title>Calendar</Title>
      <Forecast />
      <DateSelector />
      <Agenda />
      <ModalReminder />
    </div>
  );
}

export default Calendar;
