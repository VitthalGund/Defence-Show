import "../css/nav.css";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../source/IMG/logo.jpg";

window.addEventListener("resize", () => {
  if (window.screen.width <= 710) {
    document.body.querySelectorAll('.nav-link').forEach((item) => {
      item.classList.remove("nav-link-ltr")
    })
  } else {
    document.body.querySelectorAll('.nav-link').forEach((item) => {
      item.classList.add("nav-link-ltr")
    })
  }
});
export default function NavBar() {
  let location = useLocation();
  useEffect(() => {
    if (window.screen.width > 710) {
      if (location.pathname === "/") {
        document.getElementById("home").classList.add("nav-link-ltr-location");
      }
      else if (location.pathname === "/about") {
        document.getElementById("about").classList.add("nav-link-ltr-location");
      }
      else if (location.pathname === "/contact") {
        document.getElementById("contact").classList.add("nav-link-ltr-location");
      }
      else {
        document.getElementById("blogs").classList.add("nav-link-ltr-location");
      }
    }
    return () => {
      if (window.screen.width > 710) {
        document.getElementById("home").classList.remove("nav-link-ltr-location");
        document.getElementById("about").classList.remove("nav-link-ltr-location");
        document.getElementById("contact").classList.remove("nav-link-ltr-location");
        document.getElementById("blogs").classList.remove("nav-link-ltr-location");
      }
    }
  }, [location])
  return (
    <>
      <nav>
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">
              <img
                src={logo}
                alt="Logo"
                style={{
                  display: "block",
                  borderRadius: "200px",
                  width: "20%",
                  margin: "0px",
                }}
              />
            </div>
            <div className="nav-heading nav-link" style={{ background: "" }}>Defence Shorts</div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <Link to="/" id="home" className="nav-link nav-link-ltr" >
              Home
            </Link>
            <Link to="/about" id="about" className="nav-link nav-link-ltr">
              About
            </Link>
            <Link
              to="https://www.youtube.com/@defenceshort1/"
              target="_blank"
              style={{ color: "red" }}
              className="nav-link nav-link-ltr"
            >
              YouTube
            </Link>
            <Link to="/contact" id="contact" className="nav-link nav-link-ltr" >
              Contact
            </Link>
            <Link to="/blogs" id="blogs" className="nav-link nav-link-ltr" >
              Blogs
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}