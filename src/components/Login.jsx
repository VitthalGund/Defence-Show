import { useState, useContext, useEffect } from "react";
import "../css/login.css";
import axios from "../api/axios";
import AuthenticationContext from "../context/Auth/useContext";
import AlertContext from "../context/Alert/useContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentails, setCredentails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { setAuthToken, persist, setPersist } = useContext(
    AuthenticationContext
  );
  const { displayAlert } = useContext(AlertContext);
  const handleOnChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  const navigation = useNavigate();
  const validateUserCredentails = async () => {
    try {
      const response = await axios.post(
        "/auth",
        JSON.stringify({
          username: credentails.username,
          email: credentails.email,
          password: credentails.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            withCredentails: true,
          },
        }
      );
      console.log(response.data);
      setAuthToken({
        username: credentails.username,
        password: credentails.password,
        email: credentails.email,
        roles: response?.data?.roles,
        token: response?.data?.authToken,
      });
      document.cookie = `jwt=${
        response.data.refreshToken
      };httpOnly=true; secure=true; sameSite=None; maxAge=${
        24 * 60 * 60 * 1000
      }`;
      displayAlert("Login Successfully!", "success");
      navigation("/");
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        displayAlert("No Server Response", "danger");
      } else if (error.response?.status === 400) {
        displayAlert("Missing Username or Password", "danger");
      } else if (error.response?.status === 401) {
        displayAlert("Unauthorized", "danger");
      } else {
        displayAlert("Login Failed", "danger");
      }
    }
  };

  useEffect(() => {
    setCredentails({
      username: "Admin",
      email: "dnyaneshwarigund2003@gmail.com",
      password: "Vitthal@2005",
    });
    // eslint-disable-next-line
  }, []);
  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);
  // mailjet
  //[password]:Vitthal@2005
  return (
    <>
      <div className="login_sign">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validateUserCredentails();
          }}
          className="container"
          style={{ backgroundColor: "#f2f2f2", borderRadius: "15px" }}
        >
          <h1 style={{ color: "orange" }}>Login</h1>
          <div className="form-group">
            <label htmlFor="Username" className="form-label">
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "0" }}
              >
                U
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "1" }}
              >
                s
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "2" }}
              >
                e
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "3" }}
              >
                r
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "4" }}
              >
                n
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "4" }}
              >
                a
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "4" }}
              >
                m
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "4" }}
              >
                e
              </span>
              <span className="sr-only">Username</span>
            </label>
            <div className="form-group__input">
              <input
                required
                type="text"
                id="username"
                className="form-input"
                minLength={2}
                title="Enter valid username"
                placeholder="@username"
                name="username"
                value={credentails.username}
                onChange={(e) => handleOnChange(e)}
              />
              <div className="form-group__error">Enter a valid username</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "0" }}
              >
                E
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "1" }}
              >
                m
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "2" }}
              >
                a
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "3" }}
              >
                i
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "4" }}
              >
                l
              </span>
              <span className="sr-only">Email</span>
            </label>
            <div className="form-group__input">
              <input
                required
                type="email"
                id="email"
                className="form-input"
                title="Enter valid email"
                placeholder="E-mail"
                name="email"
                value={credentails.email}
                onChange={(e) => handleOnChange(e)}
              />
              <div className="form-group__error">
                Enter a valid email address
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "0" }}
              >
                P
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "1" }}
              >
                a
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "2" }}
              >
                s
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "3" }}
              >
                s
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "4" }}
              >
                w
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "4" }}
              >
                o
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "4" }}
              >
                r
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "4" }}
              >
                d
              </span>
              <span className="sr-only">Password</span>
            </label>
            <div className="form-group__input">
              <input
                required
                type="password"
                id="password"
                className="form-input"
                title="Password"
                placeholder="Enter valid password address"
                name="password"
                value={credentails.password}
                minLength={4}
                onChange={(e) => handleOnChange(e)}
              />
              <div className="form-group__error">
                Password should be more than 8 character
              </div>
            </div>
            <div className="form-group__input_checkbox">
              <input
                type="checkbox"
                id="persist"
                name="persist"
                // className='persistCheck'
                onChange={togglePersist}
                checked={persist}
              />
              <label htmlFor="persist" className="persistCheck">
                Trust This Device
              </label>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
