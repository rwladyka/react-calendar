import React from "react";

import styled from "styled-components";

const Block = (props) => {
  return <BlockStyled {...props}>{props.children}</BlockStyled>;
};

const BlockStyled = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "unset"};
`;

export default Block;
