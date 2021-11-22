import React from "react";
import "./Spinner.scss";

export const Spinner = () => {
  return (
    <div className="loading">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
};
