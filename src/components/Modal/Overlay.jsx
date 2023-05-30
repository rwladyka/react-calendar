import React from "react";

import styled from "styled-components";

const Overlay = ({ onClick }) => {
  return <OverlayStyled onClick={onClick} />;
};

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9;
`;

export default Overlay;
