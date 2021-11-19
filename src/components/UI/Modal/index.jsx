import React, { useContext } from "react";
import { Button } from "../Button";
import "./Modal.scss";
import { ModalContext } from "../../../context/modal-context";

export const Modal = () => {
  const setVisibility = useContext(ModalContext).setVisibility;

  const toggle = () => {
    setVisibility();
  };
  return (
    <div>
      <div className="modal-backdrop" onClick={toggle} />
      <div className="modal">
        <div className="content">
          <img src="/" alt="Random dog img" />
        </div>
        <footer>
          <div>
            <Button name="Close" handleClick={toggle} />
            <Button name="Next photo" />
          </div>
        </footer>
      </div>
    </div>
  );
};
