import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "../utils/Colors";

function Button({ onClick, children, variant }) {
  return (
    <ButtonStyled onClick={onClick} variant={colors[variant]}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  border: none;
  border-radius: 4px;
  background: ${(props) => props.variant.background};
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
`;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
