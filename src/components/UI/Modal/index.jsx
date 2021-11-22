import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button";
import "./Modal.scss";
import { ModalContext } from "../../../context/modal-context";
import { getRandomDogPhoto } from "../../../utility/API/Axios";

export const Modal = () => {
  const setVisibility = useContext(ModalContext).setVisibility;
  const modalTitle = useContext(ModalContext).title;

  const [dogPhoto, setDogPhoto] = useState(null);

  useEffect(() => {
    getDogPhoto();
  }, []);

  const getDogPhoto = async () => {
    const dogPhoto = await getRandomDogPhoto(modalTitle);
    if (dogPhoto) {
      setDogPhoto(dogPhoto);
    }
  };

  const toggle = () => {
    setVisibility();
  };
  return (
    <div>
      <div className="modal-backdrop" onClick={toggle} />
      <div className="modal">
        <div className="content">
          <img src={dogPhoto} alt="Random dog img" />
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
