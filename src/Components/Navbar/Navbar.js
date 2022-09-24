import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navcontainer">
      <div className="navinnercontainer">
        <div
          className="navlogocontainer"
          onClick={() => {
            navigate("/");
          }}
        >
          <span>Tina Rosario</span>
        </div>
        <div className="navoptions">
          <span
            className="navlink1"
            onClick={() => {
              navigate("/");
            }}
          >
            Gallery
          </span>
          <span
            className="navlink2"
            onClick={async () => {
              await navigate("/");
              // document.getElementById("contactusdiv").scrollIntoView();
              document.getElementById("testimonialsdiv").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Testimonials
          </span>
          <span className="navlink3">About Us</span>
          <span
            className="navlink5"
            onClick={() => {
              navigate("/fabrics");
            }}
          >
            Fabrics
          </span>
          <span
            onClick={async () => {
              await navigate("/");
              // document.getElementById("contactusdiv").scrollIntoView();
              document.getElementById("contactusdiv").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="navlink4"
          >
            Contact Us
          </span>
        </div>
        <div className="navicons">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>
        </div>
        <div
          style={{
            "@media (min-width: 800px)": {
              display: "none",
            },
          }}
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
