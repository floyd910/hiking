import React from "react";
import HeroCarousel from "../../components/carousel/Carousel";
import Hero from "../../components/hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <div>
        <div className="slogan">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
