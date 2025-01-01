import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      {/* <Link className="brand_logo link" to="/">
        <img
          src="https://pingeorgia.tours/files/logo/t5hFiHwtJV6M4dDw9s4FB8gNXe9kH2.png"
          alt="PinGeorgia.ge - Adventures Around Georgia"
        />
        <h1>PinGeorgia.Ge</h1>
      </Link> */}
      <div>
        <h4>
          <strong>Adventures Around Georgia</strong>
        </h4>
        <div className="socials">
          <a
            target="_blank"
            href="https://www.facebook.com/pingeorgia"
            className="link"
          >
            <RiFacebookCircleFill color="#ddd" size="20px" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/pingeorgia/"
            className="link"
          >
            <FaInstagram color="#ddd" size="18px" />
          </a>
        </div>
      </div>
      <div className="footer_pages">
        <div className="tour_pages">
          <h5>Tours</h5>

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
        </div>
        <div className="company_pages">
          <h5>PinGeorgia</h5>
          <Link to="/about_us" className="link">
            <h2>About Us</h2>
          </Link>
          <Link to="/contact" className="link">
            <h2>Contact</h2>
          </Link>
        </div>
        <div className="other_pages">
          <h5>Other</h5>
          <Link to="/rent_equipment" className="link">
            <h2>Rent Equipment</h2>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
