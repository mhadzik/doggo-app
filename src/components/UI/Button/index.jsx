import React from "react";
import "./Button.scss";

export const Button = ({ name, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      {name}
    </button>
  );
};
