import { useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../source/IMG/logo.jpg";
import AuthenticationContext from "../context/Auth/useContext";
import axios from "../api/axios";
import "../css/button.css";
import "../css/nav.css";
import AlertContext from "../context/Alert/useContext";

export default function NavBar() {
  let location = useLocation();
  const redirect = useNavigate();
  const { verifyLogin, setAuthToken } = useContext(AuthenticationContext);
  const { displayAlert } = useContext(AlertContext);

  useEffect(() => {
    if (window.screen.width >= 860) {
      if (location.pathname === "/") {
        document.getElementById("home").classList.add("nav-link-ltr-location");
      } else if (location.pathname === "/about") {
        document.getElementById("about").classList.add("nav-link-ltr-location");
      } else if (location.pathname === "/contact") {
        document.getElementById("contact").classList.add("nav-link-ltr-location");
      } else if (location.pathname === "/blogs") {
        document.getElementById("blogs").classList.add("nav-link-ltr-location");
      }
    }
    return () => {
      if (window.screen.width >= 860) {
        if (location.pathname === "/") {
          document.getElementById("home").classList.remove("nav-link-ltr-location");
        } else if (location.pathname === "/about") {
          document.getElementById("about").classList.remove("nav-link-ltr-location");
        } else if (location.pathname === "/contact") {
          document.getElementById("contact").classList.remove("nav-link-ltr-location");
        } else if (location.pathname === "/blogs") {
          document.getElementById("blogs").classList.remove("nav-link-ltr-location");
        }
      }
    };
  }, [location]);
  const handleLogout = async () => {
    try {
      const response = await axios.get("/logout");
      if (response.status === 204) {
        setAuthToken();
        redirect("/");
        displayAlert("Logout Successfully!", "success");
      } else {
        displayAlert("Unable to Logout!", "danger");
      }
    } catch (error) {
      if (!error?.response) {
        displayAlert("No Server Response", "danger");
      } else if (error.response?.status === 400) {
        displayAlert("Missing Username or Password", "danger");
      } else if (error.response?.status === 401) {
        displayAlert("Unauthorized", "danger");
      } else {
        displayAlert("Request Failed", "danger");
      }
    }
  };
  return (
    <>
      <nav>
        <div className="nav">
          <input type="checkbox" id="nav-check" name="menu" />
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
            <div className="nav-heading nav-link" id="title">
              Defence Shorts
            </div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <Link to="/" id="home" className="nav-link nav-link-ltr">
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
            <Link to="/contact" id="contact" className="nav-link nav-link-ltr">
              Contact
            </Link>
            <Link to="/blogs" id="blogs" className="nav-link nav-link-ltr">
              Blogs
            </Link>
            {!verifyLogin() ? (
              <div className="buttons">
                <button onClick={() => redirect("/login")}>Login</button>
                <button onClick={() => redirect("/sign")}>Sign Up</button>
              </div>
            ) : (
              <>
                <Link to="/user">
                  <i
                    className="bi bi-person-check-fill"
                    style={{ fontSize: "30px", marginTop: "10px" }}
                  ></i>
                </Link>
                <button
                  className="logout"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
