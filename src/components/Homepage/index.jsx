import React from "react";
import "./Homepage.scss";
import { DogCard } from "../DogCard";

export const Homepage = () => {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(<DogCard />);
  }

  return (
    <section className="homepage">
      <div className="homepage__dogs">{arr}</div>
    </section>
  );
};
