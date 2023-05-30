import React from "react";

import styled from "styled-components";

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

const StyledTitle = styled.h1`
  font-size: 1.5em;
  color: navy;
`;

export default Title;
