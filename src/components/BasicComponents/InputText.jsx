import React from "react";

import styled from "styled-components";

import Label from "./Label";

const InputText = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  width = "unset",
  minLength = 0,
  maxLength = Infinity,
}) => (
  <Styled>
    {label && <Label htmlFor={id}>{label}</Label>}
    <InputStyled
      data-testid="rw-input-data-test-id"
      id={id}
      name={name}
      type="text"
      value={value}
      onInput={onChange}
      placeholder={placeholder}
      width={width}
      minLength={minLength}
      maxLength={maxLength}
    />
  </Styled>
);

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputStyled = styled.input`
  margin: 0;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border-color: #333;
  height: 36px;
  width: ${(props) => props.width};
`;

export default InputText;
