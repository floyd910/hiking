import React from "react";
import TourItem from "../tourItem/TourItem";
import "./Tours.css";

const Tours = ({ tours }) => {
  return (
    <div className="container tours_container">
      <h2>Tours</h2>
      <div className="tours">
        {tours.map((tour, index) => {
          return <TourItem key={tour.title} item={tour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
