import React from "react";
import "./DogCard.scss";
import { Button } from "../UI/Button";

export const DogCard = ({name}) => {
  return (
    <div className="DogCard">
      <Button name={name} />
    </div>
  );
};
