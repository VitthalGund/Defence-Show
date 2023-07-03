import { useState, useContext } from "react";
import "../css/login.css";
import axios from "../api/axios";
import AuthenticationContext from "../context/Auth/useContext";
import AlertContext from "../context/Alert/useContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentails, setCredentails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { setAuthToken, authToken } = useContext(AuthenticationContext);
  const { displayAlert } = useContext(AlertContext);
  const handleOnChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  const navigation = useNavigate();
  const createNewUser = async () => {
    try {
      const response = await axios.post(
        "/register",
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
      if (response.status === 201) {
        const response1 = await axios.post(
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
        console.log(response1);
        setAuthToken({
          username: credentails.username,
          password: credentails.password,
          roles: response?.data?.roles,
          token: response?.data?.authToken,
        });
        displayAlert("Account Created Successfully!", "success");
        navigation("/");
      }
      console.log(authToken);
    } catch (error) {
      console.log(error.response);
      if (!error?.response) {
        displayAlert("No Server Response!", "danger");
      } else if (error.response?.status === 400) {
        displayAlert("Missing Username or Password!", "danger");
      } else if (error.response?.status === 409) {
        displayAlert("Username or Email is already used!", "danger");
      } else if (error.response?.status === 400) {
        displayAlert("Missing Username or Password!", "danger");
      } else if (error.response?.status === 401) {
        displayAlert("Unauthorized!", "danger");
      } else {
        displayAlert("Failed to create your Account!", "danger");
      }
    }
  };
  return (
    <>
      <div className="login_sign">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createNewUser();
          }}
          className="container"
          style={{ backgroundColor: "#f2f2f2", borderRadius: "15px" }}
        >
          <h1 style={{ color: "orange" }}>Sign Up</h1>
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
                // pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                // pattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
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
                placeholder="Password"
                name="password"
                value={credentails.password}
                // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                minLength={4}
                onChange={(e) => handleOnChange(e)}
              />
              <div className="form-group__error">
                Password should be more than 8 character
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
                C
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "1" }}
              >
                o
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "2" }}
              >
                n
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "3" }}
              >
                f
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "4" }}
              >
                i
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "5" }}
              >
                r
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "6" }}
              >
                m
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "7" }}
              >
                -
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "8" }}
              >
                P
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "9" }}
              >
                a
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "10" }}
              >
                s
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "11" }}
              >
                s
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "12" }}
              >
                w
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "13" }}
              >
                o
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "14" }}
              >
                r
              </span>
              <span
                aria-hidden="true"
                className="label__letter"
                style={{ "--index": "15" }}
              >
                d
              </span>
              <span className="sr-only">Confirm Password</span>
            </label>
            <div className="form-group__input">
              <input
                required
                type="password"
                id="confirmPassword"
                className="form-input"
                title="confirm Password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={credentails.confirmPassword}
                // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                minLength={4}
                onChange={(e) => handleOnChange(e)}
              />
              <div className="form-group__error">
                Password should be more than 8 character
              </div>
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
