import React from "react";

import styled from "styled-components";

import { colors } from "../../utils/Colors";

const Message = ({ variant, children }) => {
  return <StyledMessage variant={colors[variant]}>{children}</StyledMessage>;
};

const StyledMessage = styled.div`
  border: 1px solid ${(props) => props.variant.color};
  padding: 8px 16px;
  text-align: center;
  color: ${(props) => props.variant.color};
  background: ${(props) => props.variant.background};
  border-radius: 5px;
  margin: auto 0;
`;

export default Message;
