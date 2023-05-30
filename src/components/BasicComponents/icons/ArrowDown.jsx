import React from "react";

import styled from "styled-components";

const ArrowDown = ({ color = "#231F20", direction }) => {
  return (
    <Styled direction={direction}>
      <svg
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 1.47L7.06.53 4 3.583.94.53 0 1.47l4 4 4-4z" fill={color} />
      </svg>
    </Styled>
  );
};

const Styled = styled.div`
  transform: ${(props) => (props.direction === "up" ? "rotate(180deg)" : "")};
`;
export default ArrowDown;
