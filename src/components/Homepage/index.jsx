import React, { useEffect, useState, useContext } from "react";
import "./Homepage.scss";
import getAllDogs from "../../utility/Axios";
import { DogCard } from "../DogCard";
import { Modal } from "../UI/Modal";
import { ModalContext } from "../../context/modal-context";

export const Homepage = () => {
  const [dogs, setDogs] = useState([]);

  const showModal = useContext(ModalContext).visible;

  useEffect(() => {
    getDogs();
  }, []);

  const dogsArr = Object.keys(dogs).map((dog, index) => {
    let types = dogs[Object.keys(dogs)[index]];
    if (types.length !== 0) {
      return types.map((type) => {
        return <DogCard name={dog + " " + type} key={dog + " " + type} />;
      });
    } else return <DogCard name={dog} key={dog} />;
  });

  const getDogs = async () => {
    const dogs = await getAllDogs();
    if (dogs) {
      setDogs(dogs);
    }
  };

  return (
    <section className="homepage">
      {showModal ? <Modal /> : null}
      <div className="homepage__dogs">{dogsArr}</div>
    </section>
  );
};
