import React from "react";

import styled from "styled-components";

import { colors } from "../../utils/Colors";

const Button = ({ children, onClick, variant = "info" }) => {
  return (
    <StyledButton onClick={onClick} variant={colors[variant]}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  border: none;
  background: ${(props) => props.variant.background};
  border-radius: 5px;
  padding: 8px 16px;
  height: 36px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export default Button;
