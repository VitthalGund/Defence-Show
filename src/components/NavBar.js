import "../CSS/nav.css";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../source/IMG/logo.jpg";

function NavBar() {
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
            <div className="nav-titleN nav-link" style={{ background: "" }}>Defence Shorts</div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <Link to="/" className="nav-link nav-link-ltr">
              Home
            </Link>
            <Link to="/about" className="nav-link nav-link-ltr">
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
            <Link to="/contact" className="nav-link nav-link-ltr">
              Contact
            </Link>
            <Link to="/blogs" className="nav-link nav-link-ltr">
              Blogs
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
