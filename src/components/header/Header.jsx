import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MobileMenu from "../mobileMenu/MobileMenu";

const Header = () => {
  return (
    <div className="header">
      <header>
        <Link className="brand_logo link" to="/">
          <img
            src="https://pingeorgia.tours/files/logo/t5hFiHwtJV6M4dDw9s4FB8gNXe9kH2.png"
            alt="PinGeorgia.ge - Adventures Around Georgia"
          />
          <h1>PinGeorgia.Ge</h1>
        </Link>
        <nav className="desktop_menu">
          <Link to="/" className="link">
            <h2>Home</h2>
          </Link>
          <Link to="/about_us" className="link">
            <h2>About Us</h2>
          </Link>
          <Link to="/hiking" className="link">
            <h2>Hiking</h2>
          </Link>
          <Link to="/canyoning" className="link">
            <h2>Canyoning</h2>
          </Link>
          <Link to="/mountain_biking" className="link">
            <h2>Mountain Biking</h2>
          </Link>
          <Link to="/winter_tours" className="link">
            <h2>Winter Tours</h2>
          </Link>
          <Link to="/rent_equipment" className="link">
            <h2>Rent Equipment</h2>
          </Link>
        </nav>
        <div className="mobile_menu">
          <MobileMenu />
        </div>
      </header>
    </div>
  );
};

export default Header;
