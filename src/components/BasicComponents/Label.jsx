import React from "react";

import styled from "styled-components";

const Label = ({ htmlFor, children }) => (
  <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
);

const StyledLabel = styled.label`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export default Label;
