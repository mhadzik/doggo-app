import React, { useEffect, useState } from "react";
import "./Homepage.scss";
import { DogCard } from "../DogCard";
import getAllDogs from "../../utility/Axios";

export const Homepage = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs();
  }, []);

  const dogsArr = Object.keys(dogs).map((dog, index) => {
    return <DogCard name={dog} key={index} />;
  });

  const getDogs = async () => {
    const dogs = await getAllDogs();
    if (dogs) {
      setDogs(dogs);
    }
  };

  return (
    <section className="homepage">
      <div className="homepage__dogs">{dogsArr}</div>
    </section>
  );
};
