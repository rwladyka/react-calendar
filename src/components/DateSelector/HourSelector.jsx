import React, { useState } from "react";

import { isDeleteinput } from "../../utils/input";
import InputText from "../BasicComponents/InputText";
import Selector from "./Selector";

const HourSelector = ({ hour, onChange, period, onSelect }) => {
  const handleChange = ({ target: { value }, nativeEvent: { inputType } }) => {
    if (isDeleteinput(inputType)) {
      onChange(value);
      return;
    }

    const newVal = value.split(":").reduce((acc, curr) => {
      if (isNaN(parseInt(curr))) return acc;
      if (acc.length === 0 && curr.length === 2)
        return curr > 11 ? "11:" : `${curr}:`;

      return (acc + curr.replace(/\D/i)).substring(0, 5);
    }, "");

    onChange(newVal);
  };

  return (
    <div style={{ display: "flex" }}>
      <InputText
        id="rw-modal-hour"
        name="hour"
        label="Hour"
        value={hour}
        placeholder="Type the hour"
        onChange={handleChange}
        width="110px"
      />
      <div style={{ marginLeft: "16px" }}>
        <Selector
          label="&nbsp;"
          selected={period}
          options={[
            { label: "am", value: "am" },
            { label: "pm", value: "pm" },
          ]}
          onSelect={(selected) => onSelect(selected)}
          width="80px"
        />
      </div>
    </div>
  );
};

export default HourSelector;
