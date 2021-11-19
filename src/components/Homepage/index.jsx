import React, { useEffect, useState } from "react";
import "./Homepage.scss";
import { DogCard } from "../DogCard";
import getAllDogs from "../../utility/Axios";

export const Homepage = () => {
  let arr = [];
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs();
  }, []);
  console.log(dogs);

  const getDogs = async () => {
    const dogs = await getAllDogs();
    if (dogs) {
      setDogs(dogs);
    }
  };

  for (let i = 0; i < 10; i++) {
    arr.push(<DogCard />);
  }

  return (
    <section className="homepage">
      <div className="homepage__dogs">{arr}</div>
    </section>
  );
};
