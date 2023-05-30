import React, { useRef, useEffect } from "react";

const PREFIX_ID = "rw-outside-";

const OutsideClick = (props) => {
  const component = useRef();

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (!event.target.closest(`#${PREFIX_ID}${props.id}`)) {
        props.onClickOutside();
      }
    });
  });
  return (
    <div ref={component} id={`${PREFIX_ID}${props.id}`}>
      {props.children}
    </div>
  );
};

export default OutsideClick;
