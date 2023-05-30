import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDate } from "../../actions/Date";
import { getMonthName } from "../../utils/Date";
import Selector from "./Selector";

const months = [
  { value: 0, label: "January" },
  { value: 1, label: "February" },
  { value: 2, label: "March" },
  { value: 3, label: "April" },
  { value: 4, label: "May" },
  { value: 5, label: "June" },
  { value: 6, label: "July" },
  { value: 7, label: "August" },
  { value: 8, label: "September" },
  { value: 9, label: "October" },
  { value: 10, label: "November" },
  { value: 11, label: "December" },
];

const MonthSelector = () => {
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();

  const onSelect = (option) => {
    dispatch(setDate(new Date(date.getFullYear(), option.value)));
  };

  const label = getMonthName(date.getMonth());
  const selected = { value: date.getMonth(), label };

  return (
    <Selector
      label="Month"
      options={months}
      selected={selected}
      onSelect={onSelect}
    />
  );
};

export default MonthSelector;
