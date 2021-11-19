import React, { useContext } from "react";
import "./DogCard.scss";
import { Button } from "../UI/Button";
import { ModalContext } from "../../context/modal-context";

export const DogCard = ({ name }) => {
  const setVisibility = useContext(ModalContext).setVisibility;

  const toggle = () => {
    setVisibility();
  };
  return (
    <div className="DogCard">
      <Button name={name} handleClick={toggle} />
    </div>
  );
};
