import React from "react";

const Line = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
};

export default Line;
