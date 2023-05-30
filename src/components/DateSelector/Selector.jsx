import React, { useState } from "react";

import styled from "styled-components";

import ArrowDown from "../BasicComponents/icons/ArrowDown";
import Label from "../BasicComponents/Label";
import OutsideClick from "../BasicComponents/OutsideClick";

const Selector = ({ label, options, selected, onSelect, width }) => {
  const [opened, setOpened] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setOpened(false);
  };

  return (
    <OutsideClick onClickOutside={() => setOpened(false)} id={label}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          position: "relative",
          height: "54px",
        }}
      >
        {label && <Label>{label}</Label>}
        <SelectStyled onClick={() => setOpened(true)} width={width}>
          <span>{selected?.label || "Select"}</span>
          <ArrowDown color="#333" />
        </SelectStyled>
        {opened && (
          <OptionsStyled width={width}>
            {options.map((option) => (
              <OptionStyled
                onClick={() => handleSelect(option)}
                key={option.value}
                selected={option.value === selected?.value}
              >
                {option.label}
              </OptionStyled>
            ))}
          </OptionsStyled>
        )}
      </div>
    </OutsideClick>
  );
};

const SelectStyled = styled.div`
  padding: 6px 8px;
  border: 2px solid #333;
  color: #333;
  background: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.width ? props.width : "200px")};
`;

const OptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  overflow: auto;
  background: #fff;
  color: #2f74b5;
  border: 1px solid #333;
  box-shadow: 0 2px 6px rgb(0 0 0 / 5%), 0 0 0 1px rgb(0 0 0 / 7%);
  width: 100%;
  padding: 4px;
  position: absolute;
  z-index: 1;
  max-height: 160px;
  margin-top: 60px;
  border-radius: 4px;
  width: ${(props) => (props.width ? props.width : "200px")};
`;

const OptionStyled = styled.div`
  padding: 2px 8px;
  background: ${(props) => (props.selected ? "#2f74b5" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#2f74b5")};

  &:hover {
    background: #2f74b5;
    color: #fff;
  }
`;

export default Selector;
