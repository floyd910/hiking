import React from "react";
import HeroCarousel from "../../components/carousel/Carousel";
import Hero from "../../components/hero/Hero";
import "./Home.css";
import Tours from "../../components/tours/Tours";

const Home = ({ tours }) => {
  return (
    <>
      <HeroCarousel />
      <div className="page home_page">
        <div>
          <Tours tours={tours} />
        </div>
      </div>
    </>
  );
};

export default Home;
