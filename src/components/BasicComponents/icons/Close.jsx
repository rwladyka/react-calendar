import React from "react";

const Close = ({ color = "#231F20" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      height="20px"
      width="20px"
    >
      <path
        fill={color}
        d="M10 0C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-9.41L13.59 5 15 6.41 11.41 10 15 13.59 13.59 15 10 11.41 6.41 15 5 13.59 8.59 10 5 6.41 6.41 5 10 8.59z"
      ></path>
    </svg>
  );
};

export default Close;
