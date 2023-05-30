import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDate } from "../../actions/Date";
import Selector from "./Selector";

const years = [];

for (let i = 1980; i <= 2030; i++) {
  years.push({ value: i, label: i });
}

const YearSelector = () => {
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();

  const onSelect = (option) => {
    dispatch(setDate(new Date(option.value, date.getMonth())));
  };

  const selected = { value: date.getFullYear(), label: date.getFullYear() };

  return (
    <Selector
      label="Year"
      options={years}
      selected={selected}
      onSelect={onSelect}
    />
  );
};

export default YearSelector;
