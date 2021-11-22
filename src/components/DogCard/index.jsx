import React, { useContext } from "react";
import "./DogCard.scss";
import { Button } from "../UI/Button";
import { ModalContext } from "../../context/modal-context";

export const DogCard = ({ name }) => {
  const setVisibility = useContext(ModalContext).setVisibility;
  const setModalTitle = useContext(ModalContext).setTitle;

  const toggle = (event) => {
    setVisibility();
    if (/\s/.test(event.target.innerHTML)) {
      setModalTitle(event.target.innerHTML.split(" ")[0]);
      return;
    }
    setModalTitle(event.target.innerHTML);
  };

  return (
    <div className="DogCard">
      <Button name={name} handleClick={(event) => toggle(event)} />
    </div>
  );
};
