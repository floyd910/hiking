// Carousel.jsx
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

const HeroCarousel = () => {
  const slides = [
    {
      img: "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1704893295/DSCF9647_ljlauh.jpg?fbclid=IwAR19nqmUCj2F79maqg9XIovP8ruT3rtoAqMXx45mZATDU507LmHNwHdIOW0",
    },
    {
      img: "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1704893296/ZNPH8471-2_omj5it.jpg?fbclid=IwAR2nNogkhGRAOidL4A8tF3_102MvFq7iA2fUmub1-FNwv-wLlUZeBKN9ZQo",
    },
    {
      img: "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1704893297/3_tdyw6k.jpg?fbclid=IwAR0wd1Rrluuf2hasG270uaIzH6_lFZkn79khi-tdWm_xF-MvJt8qyM2Om7I",
    },
    {
      img: "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1704893294/DSCF8328_v7fwed.jpg?fbclid=IwAR2kBZQN1aUCbVNCeYh16JUFiAjmmfoIHmVk59rrUuUYhsjVuC5TRmxZPNg",
    },
    {
      img: "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1704893294/DSCF9984_ragsbg.jpg?fbclid=IwAR1xa2h9Syokpy5ujnzLUsCIARgS8Q3XJCYDmxVPibF5z2otsaEbfcY76tw",
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={100}
        interval={2000}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url("${slide.img}")` }}
          ></div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
